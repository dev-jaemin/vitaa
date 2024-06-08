import { useEffect } from 'react';

import { enqueueSnackbar } from 'notistack';

import { usePostRegister } from '../../../apis/auth/_hooks/register.hook';
import { useFlow } from '../../../layouts/stackflow';
import { useRegisterData, useRegisterStep, useSetRegisterData } from '../../../recoil/auth';

interface RegisterResponse {
  title: string;
  description?: string;
  isDisabled?: boolean;
  registerStep: number;
  onClick?: () => void;
}

export const useGetRegisterForm = (): RegisterResponse => {
  const [registerStep, setRegisterStep] = useRegisterStep();
  const registerData = useRegisterData();
  const setRegisterData = useSetRegisterData();
  const searchParams = new URLSearchParams(window.location.search);

  const kakaoId = searchParams.get('kakaoId');
  searchParams.delete('kakaoId');

  const { push } = useFlow();

  const goHome = () => {
    push('MainActivity', {});
    return;
  };

  const postRegister = usePostRegister(registerData, goHome);

  useEffect(() => {
    if (!kakaoId) {
      enqueueSnackbar('카카오 로그인이 필요해요', { variant: 'error' });
      push('AuthActivity', {});
      return;
    }
    setRegisterData({ ...registerData, kakaoId: Number(kakaoId) });
  }, []);

  const goNext = () => {
    setRegisterStep(registerStep + 1);
  };

  const register = async () => {
    await postRegister.mutateAsync();
  };

  switch (registerStep) {
    case 1:
      return {
        title: '이름을 입력해 주세요',
        description: '닉네임도 괜찮아요. 비타봇이 사용자님을 부를때만 사용됩니다 😁',
        isDisabled: registerData.username.length === 0,
        registerStep,
        onClick: goNext,
      };
    case 2:
      return {
        title: '성별을 선택해 주세요',
        description: '비타봇이 사용자님에게 맞는 정보를 제공하기 위해 필요해요',
        isDisabled: registerData.gender === '',
        registerStep,
        onClick: goNext,
      };
    case 3:
      return {
        title: '나이를 입력해 주세요',
        description: '대략적인 나이만 입력해주셔도 괜찮아요',
        registerStep,
        isDisabled: registerData.age <= 0,
        onClick: goNext,
      };
    case 4:
      return {
        title: '키를 입력해 주세요',
        description: 'cm 단위로 입력해 주세요. 이 정보는 참고용이기에, 정확하지 않아도 괜찮아요',
        registerStep,
        onClick: goNext,
      };
    case 5:
      return {
        title: '몸무게를 입력해 주세요',
        description: 'kg 단위로 입력해 주세요. 이 정보는 참고용이기에, 정확하지 않아도 괜찮아요',
        registerStep,
        onClick: goNext,
      };
    case 6:
      return {
        title: '목표를 입력해 주세요',
        description: '비타봇이 가장 좋은 경험을 제공하기 위해 필요해요',
        isDisabled: registerData.goal.length === 0,
        registerStep,
        onClick: register,
      };
    default:
      return {
        title: '알 수 없는 에러가 발생했어요',
        description: '잠시 뒤 다시 접속해 주세요ㅠㅠ',
        isDisabled: true,
        registerStep,
        onClick: goNext,
      };
  }
};
