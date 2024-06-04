import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const isLoadingChat = atom<boolean>({
  key: 'isLoadingChat',
  default: false,
});

const tempMessageAtom = atom({
  key: 'tempMessageAtom',
  default: {
    message: '',
    type: 'question',
    createdAt: '',
  },
});

const useIsLoadingChat = () => useRecoilValue(isLoadingChat);
const useSetIsLoadingChat = () => useSetRecoilState(isLoadingChat);

const useTempMessageStore = () => useRecoilState(tempMessageAtom);

export { useIsLoadingChat, useSetIsLoadingChat, useTempMessageStore };
