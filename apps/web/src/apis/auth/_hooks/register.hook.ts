import { RegisterDto } from '@repo/ui';

import { postRegister } from '..';
import { useMutation } from '../../../config/react-query/useMutation';

export const usePostRegister = (data: RegisterDto, successCallback: () => void) => {
  return useMutation(
    () => postRegister(data),
    {
      meta: {
        errorMessage: '회원가입에 실패했습니다. 나중에 다시 한번 시도해주세요ㅠㅠ',
      },
    },
    { successCallback },
  );
};
