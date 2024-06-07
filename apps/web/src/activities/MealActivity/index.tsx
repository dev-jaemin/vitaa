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

type MealActivityParams = {
  params: {
    meal: Meal;
  };
};

const MealActivity: React.FC<MealActivityParams> = ({ params: { meal } }) => {
  const capturedImage = useCapturedImage();

  return (
    <AppScreen>
      <BackHeader />
      <ScreenContainer gap={4} sx={{ height: '100%' }} pb={10}>
        <MealBox meal={meal} max={3000} isDisableClick />
        <ReviewBox meal={meal} />
        <MealImageBox src={capturedImage ?? ''} />
        <NutrientBox meals={[meal]} isShowHeader />
        <Box height={100} />
      </ScreenContainer>
    </AppScreen>
  );
};

export default MealActivity;
