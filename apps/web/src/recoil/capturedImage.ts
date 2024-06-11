import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { MealImage } from '../types/images';

const capturedImageAtom = atom<MealImage[]>({
  key: 'capturedImage',
  default: [],
});

const useCapturedImage = () => useRecoilValue(capturedImageAtom);
const useSetCapturedImage = () => useSetRecoilState(capturedImageAtom);

export { useCapturedImage, useSetCapturedImage };
