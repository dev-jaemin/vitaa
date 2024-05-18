import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { RegisterDto } from '@repo/ui';

const registerStepAtom = atom<number>({
  key: 'registerStepAtom',
  default: 1,
});

const registerAtom = atom<RegisterDto>({
  key: 'registerAtom',
  default: {
    kakaoId: 0,
    username: '',
    gender: '',
    age: 20,
    weight: 60,
    height: 170,
    goal: '',
  },
});

const useRegisterData = () => useRecoilValue(registerAtom);
const useSetRegisterData = () => useSetRecoilState(registerAtom);

const useRegisterStep = () => useRecoilState(registerStepAtom);
const useSetReigsterStep = () => useSetRecoilState(registerStepAtom);

export { useRegisterData, useSetRegisterData, useRegisterStep, useSetReigsterStep };
