import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { MealTime } from '../types/Meal';

const selectedMealAtom = atom<MealTime>({
  key: 'selectedMealAtom',
  default: 'Breakfast',
});

const useselectedMeal = () => {
  return useRecoilValue(selectedMealAtom);
};

const useSetSelectedMeal = () => {
  return useSetRecoilState(selectedMealAtom);
};

export { useselectedMeal, useSetSelectedMeal };
