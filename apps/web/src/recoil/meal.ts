import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { Meal } from '@repo/ui';

const mealAtom = atom<Meal[]>({
  key: 'mealAtom',
  default: [],
});

const useMeals = () => useRecoilValue(mealAtom);
const useSetMeals = () => useSetRecoilState(mealAtom);

export { useMeals, useSetMeals };
