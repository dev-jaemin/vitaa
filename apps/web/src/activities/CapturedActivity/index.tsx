import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { CenterContainer, ScreenContainer } from '../../components/Containers/ScreenContainer';
import { useCapturedImage } from '../../recoil/capturedImage';
import { useFlow } from '../../layouts/stackflow';
import BackHeader from '../../components/Header/BackHeader';
import { Check, Edit } from '@mui/icons-material';
import { Box, Button, Typography, styled } from '@mui/material';
import LoadingLottie from '../../assets/lottie/loading.json';
import Lottie from 'react-lottie';
import VitaBot from '../../assets/VITA.png';
import { useEffect, useState } from 'react';
import SimpleMealBox from '../../components/MealBox/SimpleMealBox';
import { useSetSelectedMeal, useselectedMeal } from '../../recoil/selectedMeal';
import { MealTime } from '../../types/Meal';
import { usePostMealByDate } from '../../apis/meal/_hooks/postMeal';
import { PostMealDto } from '@repo/ui';
import { enqueueSnackbar } from 'notistack';

const options = {
  loop: true,
  autoplay: true,
  animationData: LoadingLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const CapturedActivity: ActivityComponentType<{ postData: PostMealDto }> = ({ params: { postData } }) => {
  const capturedImage = useCapturedImage();
  const [isLoaded, setIsLoaded] = useState(false);

  const selectedMeal = useselectedMeal();
  const setSelectedMeal = useSetSelectedMeal();

  const { mutateAsync } = usePostMealByDate(postData);

  const mutateData = async () => {
    try {
      const result = await mutateAsync();
      push('MealActivity', { meal: result });
    } catch (e) {
      /* empty */
    }

    setIsLoaded(true);
  };

  useEffect(() => {
    mutateData();
  }, []);

  const { push } = useFlow();

  const handleClickChangeMeal = (selectedMeal: MealTime) => {
    setSelectedMeal(selectedMeal);
    push('MealSelectionModal', {});
  };

  if (!capturedImage) {
    push('CameraActivity', {}, { animate: false });
  }

  const handleDone = () => {
    handleGoHome();
  };

  const handleGoHome = () => {
    push('MainActivity', {}, { animate: false });
  };

  return (
    <AppScreen>
      <BackHeader secondButtonIcon={<Check />} onClickSecondButton={handleDone} />
      <ScreenContainer gap={2} sx={{ height: '90%' }}>
        <SimpleMealBox mealCategory={selectedMeal} icon={<Edit fontSize="small" />} onClick={handleClickChangeMeal} />
        {isLoaded ? (
          <> </>
        ) : (
          <CenterContainer>
            <Lottie options={options} height={'auto'} width={'80%'} />
            <VitaBotImg src={VitaBot} alt="vita-bot" />
            <Typography variant="h6">비타봇이 음식을 분석중이에요</Typography>
            <Typography variant="caption">최대 1분 정도 소요됩니다</Typography>
            <Button variant="outlined" color="secondary" size="small" sx={{ my: 2 }} onClick={handleDone}>
              나중에 받을게요!
            </Button>
          </CenterContainer>
        )}

        {capturedImage && (
          <BoxContainer>
            <Typography variant="h6">촬영된 이미지 : </Typography>
            <Image src={capturedImage} alt="captured" />
          </BoxContainer>
        )}
      </ScreenContainer>
    </AppScreen>
  );
};

export default CapturedActivity;

const BoxContainer = styled(Box)(({ theme }) => ({
  borderRadius: 24,
  backgroundColor: theme.colors.secondary.lighter,
  width: '90%',
  padding: 16,
}));

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: 16,
  marginTop: 16,
});

const VitaBotImg = styled('img')({
  width: 64,
  borderRadius: 16,
  marginTop: 16,
});
