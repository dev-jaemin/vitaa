import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import { Check } from '@mui/icons-material';
import { Box, Button, Typography, styled } from '@mui/material';
import { PostMealDto } from '@repo/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import type { ActivityComponentType } from '@stackflow/react';

import { usePostMealByDate } from '../../apis/meal/_hooks/postMeal';
import LoadingLottie from '../../assets/lottie/loading.json';
import { CenterContainer, ScreenContainer } from '../../components/Containers/ScreenContainer';
import BackHeader from '../../components/Header/BackHeader';
import { useFlow } from '../../layouts/stackflow';
import { useCapturedImage } from '../../recoil/capturedImage';

import VitaBot from '/VITA.png';

const options = {
  loop: true,
  autoplay: true,
  animationData: LoadingLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const CapturedActivity: ActivityComponentType<{ postData: PostMealDto }> = ({ params: { postData } }) => {
  const capturedImages = useCapturedImage();
  const [isLoaded, setIsLoaded] = useState(false);

  const { mutateAsync } = usePostMealByDate(postData);

  const recentImage = capturedImages[capturedImages.length - 1];

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

  if (!recentImage) {
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
        {/* <SimpleMealBox mealCategory={selectedMeal} icon={<Edit fontSize="small" />} onClick={handleClickChangeMeal} /> */}
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

        {recentImage && (
          <BoxContainer>
            <Typography variant="h6">촬영된 이미지 : </Typography>
            <Image src={recentImage.url} alt="captured" />
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
