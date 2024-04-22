import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import MealBox from '../../components/MealBox/MealBox';
import { Grid } from '@mui/material';
import BackHeader from '../../components/Header/BackHeader';
import NutrientBox from '../../components/NutrientBox/NutrientBox';

const MealActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <BackHeader isHideSecondButton />
      <ScreenContainer gap={4} sx={{ height: '90%' }}>
        <MealBox currentCalories={0} maxCalories={0} foodCount={0} mealCategory={'BREAKFAST'} mealId={1} />
        <Grid container>
          <NutrientBox mass={0} nutrient={'CALORIES'} percentage={0} unit="kcal" />
          <NutrientBox mass={0} nutrient={'CARBS'} percentage={28} />
          <NutrientBox mass={0} nutrient={'PROTEIN'} percentage={89} />
          <NutrientBox mass={0} nutrient={'FAT'} percentage={45} />
          <NutrientBox mass={0} nutrient={'SUGAR'} percentage={12} />
          <NutrientBox mass={0} nutrient={'CALCIUM'} percentage={0} />
        </Grid>
      </ScreenContainer>
    </AppScreen>
  );
};

export default MealActivity;
