import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import Header from '../../components/Header';
import WelcomeBox from './WelcomeBox/WelcomeBox';
import CalorieBox from './CalorieBox/CalorieBox';
import MealBox from '../../components/MealBox/MealBox';
import { Box, Typography } from '@mui/material';
import NutrientBox from '../../components/NutrientBox/NutrientBox';

const MainActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <Header isCalendar />
      <ScreenContainer gap={4}>
        <WelcomeBox />
        <CalorieBox />
        <NutrientBox />
        <Typography variant="subtitle2" textAlign={'left'}>
          오늘의 식단
        </Typography>
        <Box display="flex" flexDirection="column" gap={1} width={'90%'} alignItems={'center'}>
          <MealBox currentCalories={0} maxCalories={0} foodCount={0} mealCategory={'BREAKFAST'} mealId={1} />
          <MealBox currentCalories={0} maxCalories={0} foodCount={0} mealCategory={'LUNCH'} mealId={2} />
          <MealBox currentCalories={0} maxCalories={0} foodCount={0} mealCategory={'SNACK'} mealId={3} />
          <MealBox currentCalories={0} maxCalories={0} foodCount={0} mealCategory={'DINNER'} mealId={null} />
        </Box>
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default MainActivity;
