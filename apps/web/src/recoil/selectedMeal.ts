import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { Meal } from '../types/meal';

const selectedMealAtom = atom<Meal>({
  key: 'selectedMealAtom',
  default: 'BREAKFAST',
});

const useselectedMeal = () => {
  return useRecoilValue(selectedMealAtom);
};

const useSetSelectedMeal = () => {
  return useSetRecoilState(selectedMealAtom);
};

export { useselectedMeal, useSetSelectedMeal };
