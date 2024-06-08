import { Box } from '@mui/material';
import { Meal } from '@repo/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import BackHeader from '../../components/Header/BackHeader';
import MealBox from '../../components/MealBox/MealBox';
import MealImageBox from '../../components/MealBox/MealImageBox';
import NutrientBox from '../../components/NutrientBox/NutrientBox';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import { useCapturedImage } from '../../recoil/capturedImage';
import { DeleteMealBtn } from './DeleteMealBtn';
import { useMealsStore } from '../../recoil/meal';
import { SetMeal } from '@mui/icons-material';
import { useFlow } from '../../layouts/stackflow';
import { enqueueSnackbar } from 'notistack';

type MealActivityParams = {
  params: {
    meal: Meal;
  };
};

const MealActivity: React.FC<MealActivityParams> = ({ params: { meal } }) => {
  const capturedImage = useCapturedImage();
  const [meals, setMeals] = useMealsStore();
  const { replace } = useFlow();

  const handleDeleteMeal = () => {
    // try {
    //   setMeals(meals.filter(m => m.id !== meal.id));
    //   enqueueSnackbar('삭제되었습니다.', { variant: 'success' });
    // } catch {
    //   enqueueSnackbar('삭제에 실패했습니다.', { variant: 'error' });
    // }
    enqueueSnackbar('아직 없는 기능이에요.', { variant: 'info' });
    replace('MainActivity', {});
  };

  return (
    <AppScreen>
      <BackHeader />
      <ScreenContainer gap={4} sx={{ height: '100%' }} pb={10}>
        <MealBox meal={meal} max={3000} isDisableClick />
        <ReviewBox meal={meal} />
        <MealImageBox src={capturedImage ?? ''} />
        <NutrientBox meals={[meal]} isShowHeader />
        <DeleteMealBtn handleDeleteMeal={handleDeleteMeal} />
        <Box height={100} />
      </ScreenContainer>
    </AppScreen>
  );
};

export default MealActivity;
