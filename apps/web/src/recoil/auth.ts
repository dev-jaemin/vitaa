import { RegisterDto, User } from '@repo/ui';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

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

const userAtom = atom<User | null>({
  key: 'userAtom',
  default: null,
});

const useUser = () => useRecoilValue(userAtom);
const useSetUser = () => useSetRecoilState(userAtom);

export { useRegisterData, useSetRegisterData, useRegisterStep, useSetReigsterStep, useUser, useSetUser };
