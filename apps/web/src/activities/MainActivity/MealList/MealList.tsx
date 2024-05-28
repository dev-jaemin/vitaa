import { Box, Typography } from '@mui/material';
import MealBox from '../../../components/MealBox/MealBox';
import { useMeals } from '../../../recoil/meal';
import { MealTime } from '../../../types/meal';
import RecommendMealBox from '../../../components/MealBox/RecommendMealBox';

const defaultMeals: MealTime[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

const tempMaxCalories = 3000;
const MealList = () => {
  const meals = useMeals();

  const existingMeals = new Set(meals.map(meal => meal.category));
  const missingMeals = defaultMeals.filter(meal => !existingMeals.has(meal));

  return (
    <>
      <Typography variant="subtitle2" textAlign={'left'}>
        오늘의 식단
      </Typography>
      <Box display="flex" flexDirection="column" gap={1} width={'90%'} alignItems={'center'}>
        {meals.map((meal, idx) => (
          <MealBox meal={meal} max={tempMaxCalories} key={meal.image + idx} />
        ))}
        {missingMeals.map((missingCategory, idx) => (
          <RecommendMealBox mealCategory={missingCategory} key={idx} />
        ))}
      </Box>
    </>
  );
};

export default MealList;
