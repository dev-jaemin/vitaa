import { Meal } from '@repo/ui';

const accumulateMeal = (meals: Meal[]) => {
  const acculated = {
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
  };

  meals.forEach(meal => {
    acculated.calories += meal.calories;
    acculated.carbs += meal.carbs || 0;
    acculated.protein += meal.protein || 0;
    acculated.fat += meal.fat || 0;
  });

  return acculated;
};

export default accumulateMeal;
