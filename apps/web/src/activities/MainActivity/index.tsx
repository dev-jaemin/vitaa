import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import Header from '../../components/Header';
import WelcomeBox from './WelcomeBox/WelcomeBox';
import CalorieBox from './CalorieBox/CalorieBox';
import NutrientBox from '../../components/NutrientBox/NutrientBox';
import { useGetMealByDate } from '../../apis/meal/_hooks/getMeal';
import { useSelectedDate } from '../../recoil/selectedDate';
import { useSetMeals } from '../../recoil/meal';
import { useEffect } from 'react';
import MealList from './MealList/MealList';

const MainActivity: ActivityComponentType = () => {
  const selectedDate = useSelectedDate();
  const setMeals = useSetMeals();
  const { data: mealData } = useGetMealByDate(selectedDate.toISOString().split('T')[0]);

  useEffect(() => {
    if (mealData) {
      setMeals(mealData);
    }
  }, [mealData]);

  return (
    <AppScreen>
      <Header isCalendar />
      <ScreenContainer gap={4}>
        <WelcomeBox />
        <CalorieBox />
        <NutrientBox meals={mealData ?? []} />
        <MealList />
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default MainActivity;
