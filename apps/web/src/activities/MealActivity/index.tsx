import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import MealBox from '../../components/MealBox/MealBox';
import BackHeader from '../../components/Header/BackHeader';
import NutrientBox from '../../components/NutrientBox/NutrientBox';

const MealActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <BackHeader />
      <ScreenContainer gap={4} sx={{ height: '90%' }}>
        <MealBox currentCalories={0} maxCalories={0} foodCount={0} mealCategory={'BREAKFAST'} mealId={1} />
        <NutrientBox />
      </ScreenContainer>
    </AppScreen>
  );
};

export default MealActivity;
