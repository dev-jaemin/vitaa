import { Meal } from '@repo/ui';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { DayNutrient } from '../../../../packages/ui/types/chat/dto/ChatDto';

const mealAtom = atom<Meal[]>({
  key: 'mealAtom',
  default: [],
});

/**
 * 오늘 섭취한 영양소 (채팅에 같이 보내기 위한 데이터)
 */
const todayNutrientAtom = atom<DayNutrient>({
  key: 'todayNutrientAtom',
  default: {
    day_calories: 0,
    day_carbs: 0,
    day_fat: 0,
    day_protein: 0,
  },
});

const useMeals = () => useRecoilValue(mealAtom);
const useSetMeals = () => useSetRecoilState(mealAtom);

const useTodayNutrient = () => useRecoilValue(todayNutrientAtom);
const useSetTodayNutrient = () => useSetRecoilState(todayNutrientAtom);

export { useMeals, useSetMeals, useTodayNutrient, useSetTodayNutrient };
