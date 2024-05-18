import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import MealBox from '../../components/MealBox/MealBox';
import BackHeader from '../../components/Header/BackHeader';
import NutrientBox from '../../components/NutrientBox/NutrientBox';
import { PostMealDto } from '@repo/ui';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import MealImageBox from '../../components/MealBox/MealImageBox';

type MealActivityParams = {
  params: {
    meal: PostMealDto;
  };
};

const MealActivity: React.FC<MealActivityParams> = ({ params: { meal } }) => {
  return (
    <AppScreen>
      <BackHeader />
      <ScreenContainer gap={4} sx={{ height: '90%' }}>
        <MealBox meal={meal} max={3000} isDisableClick />
        <ReviewBox meal={meal} />
        <MealImageBox src={meal.image} />
        <NutrientBox meals={[meal]} isShowHeader />
      </ScreenContainer>
    </AppScreen>
  );
};

export default MealActivity;
