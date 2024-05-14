import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { PostMealDto } from '@repo/ui';

const mealAtom = atom<PostMealDto[]>({
  key: 'mealAtom',
  default: [],
});

const useMeals = () => useRecoilValue(mealAtom);
const useSetMeals = () => useSetRecoilState(mealAtom);

export { useMeals, useSetMeals };
