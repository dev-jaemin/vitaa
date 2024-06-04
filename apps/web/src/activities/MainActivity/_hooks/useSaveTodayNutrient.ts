import { Meal } from '@repo/ui';
import { useSelectedDate } from '../../../recoil/selectedDate';
import accumulateMeal from '../../../utils/meal/accumulateMeal';
import { useSetTodayNutrient } from '../../../recoil/meal';

const today = new Date();

const useSaveTodayNutrient = () => {
  const selectedDate = useSelectedDate();
  const setTodayNutrient = useSetTodayNutrient();

  const isToday = selectedDate.toISOString().split('T')[0] === today.toISOString().split('T')[0];

  const saveNutrient = (meals: Meal[]) => {
    const { calories, fat, carbs, protein } = accumulateMeal(meals);

    setTodayNutrient({
      day_calories: calories,
      day_carbs: carbs,
      day_fat: fat,
      day_protein: protein,
    });
  };

  // 오늘 날짜의 영양정보만 저장하도록 한다
  if (!isToday) return { saveNutrient: () => {} };
  return { saveNutrient };
};

export default useSaveTodayNutrient;
