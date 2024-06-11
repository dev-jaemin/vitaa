import { Box, Typography } from '@mui/material';

import MealBox from '../../../components/MealBox/MealBox';
import RecommendMealBox from '../../../components/MealBox/RecommendMealBox';
import { mealData } from '../../../constants/meal';
import { useMeals } from '../../../recoil/meal';
import { useUserMaxNut } from '../../../recoil/userDailyNutrient';

const MealList = () => {
  const meals = useMeals();
  const { maxCalories } = useUserMaxNut();

  const existingMeals = new Set(meals.map(meal => meal.category));
  const missingMeals = mealData.filter(meal => !existingMeals.has(meal));

  return (
    <>
      <Typography variant="subtitle2" textAlign={'left'}>
        오늘의 식단
      </Typography>
      <Box display="flex" flexDirection="column" gap={1} width={'100%'} alignItems={'center'}>
        {meals.map((meal, idx) => (
          <Box width={'100%'} key={meal.id}>
            <MealBox meal={meal} max={maxCalories} key={meal.image + idx} />
          </Box>
        ))}
        {missingMeals.map((missingCategory, idx) => (
          <Box width={'100%'} key={missingCategory}>
            <RecommendMealBox mealCategory={missingCategory} key={idx} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MealList;
