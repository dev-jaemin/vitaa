import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const capturedImageAtom = atom<string | null>({
  key: 'capturedImage',
  default: null,
});

const useCapturedImage = () => {
  return useRecoilValue(capturedImageAtom);
};

const useSetCapturedImage = () => {
  return useSetRecoilState(capturedImageAtom);
};

export { useCapturedImage, useSetCapturedImage };
