import { Box } from '@mui/material';
import { Meal } from '@repo/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { enqueueSnackbar } from 'notistack';

import { DeleteMealBtn } from './DeleteMealBtn';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import BackHeader from '../../components/Header/BackHeader';
import MealBox from '../../components/MealBox/MealBox';
import MealImageBox from '../../components/MealBox/MealImageBox';
import NutrientBox from '../../components/NutrientBox/NutrientBox';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import { useFlow } from '../../layouts/stackflow';
import { useCapturedImage } from '../../recoil/capturedImage';
import { useUserMaxNut } from '../../recoil/userDailyNutrient';
// import { useMealsStore } from '../../recoil/meal';

type MealActivityParams = {
  params: {
    meal: Meal;
  };
};

const MealActivity: React.FC<MealActivityParams> = ({ params: { meal } }) => {
  const capturedImages = useCapturedImage();
  const { maxCalories } = useUserMaxNut();
  const { replace } = useFlow();

  const foundImage = capturedImages.find(
    image => image.mealCategory === meal.category && image.date === meal.date.toISOString().split('T')[0],
  );

  console.log('caputredImages', capturedImages);
  console.log('foundImage', foundImage);

  const handleDeleteMeal = () => {
    enqueueSnackbar('아직 없는 기능이에요.', { variant: 'info' });
    replace('MainActivity', {});
  };

  return (
    <AppScreen>
      <BackHeader />
      <ScreenContainer gap={4} sx={{ height: '100%' }} pb={10}>
        <MealBox meal={meal} max={maxCalories} isDisableClick />
        <ReviewBox meal={meal} />
        <MealImageBox src={foundImage?.url ?? ''} />
        <NutrientBox meals={[meal]} isShowHeader />
        <DeleteMealBtn handleDeleteMeal={handleDeleteMeal} />
        <Box height={100} />
      </ScreenContainer>
    </AppScreen>
  );
};

export default MealActivity;
