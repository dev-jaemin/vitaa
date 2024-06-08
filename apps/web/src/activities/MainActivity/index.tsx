import { useEffect } from 'react';

import { AppScreen } from '@stackflow/plugin-basic-ui';
import type { ActivityComponentType } from '@stackflow/react';

import CalorieBox from './CalorieBox/CalorieBox';
import MealList from './MealList/MealList';
import WelcomeBox from './WelcomeBox/WelcomeBox';
import { usePrefetchChat } from '../../apis/chat/_hooks/getChat.hook';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import Header from '../../components/Header';
import NutrientBox from '../../components/NutrientBox/NutrientBox';
import { useGetMealByDate } from '../../hooks/meal/useGetMealByDate';
import { useSetMeals } from '../../recoil/meal';
import { useSelectedDate } from '../../recoil/selectedDate';
import { WaterBox } from './WaterBox/WaterBox';

const MainActivity: ActivityComponentType = () => {
  const selectedDate = useSelectedDate();
  const setMeals = useSetMeals();
  const { data: mealData } = useGetMealByDate(selectedDate.toISOString().split('T')[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const prefetchChat = usePrefetchChat();

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
        <WaterBox />
        <CalorieBox />
        <NutrientBox meals={mealData ?? []} />
        <MealList />
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default MainActivity;
