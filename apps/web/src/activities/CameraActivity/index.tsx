import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

import { Box, Button, Typography, styled } from '@mui/material';
import { PostMealDto } from '@repo/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import type { ActivityComponentType } from '@stackflow/react';
import dayjs, { Dayjs } from 'dayjs';
import { enqueueSnackbar } from 'notistack';

import VITA from '/VITA.png';

import { useAddImage } from './_hooks/addImage';
import Camera from './Camera/Camera';
import CameraControlBox from './Camera/CameraControlBox';
import { DateSelect } from './DateSelect';
import { BottomNavigation } from '../../components/BottomNavigation';
import { CenterContainer } from '../../components/Containers/ScreenContainer';
import { mealData } from '../../constants/meal';
import { useFlow } from '../../layouts/stackflow';
import { useMeals } from '../../recoil/meal';
import { MEAL_TIME, type MealTime } from '../../types/Meal';
// import { useAddImage } from './_hooks/addImage';

const CameraActivity: ActivityComponentType = () => {
  const webcamRef = useRef<Webcam>(null);
  const { push } = useFlow();
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const { addImage } = useAddImage();
  const meals = useMeals();

  const existingMeals = new Set(meals.map(meal => meal.category));
  const missingMeals = mealData.filter(meal => !existingMeals.has(meal));

  const [selectedMealDate, setSelectedMealDate] = useState<{ date: Dayjs; category: MealTime }>({
    date: dayjs(),
    category: missingMeals.length ? missingMeals[0] : MEAL_TIME.BREAKFAST,
  });

  const postData: PostMealDto = {
    date: selectedMealDate.date.toDate(),
    category: selectedMealDate.category,
    image: currentImage ?? '',
  };

  const handleClick = async () => {
    push('CapturedActivity', { postData: postData });
  };

  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();

    if (imageSrc) {
      setCurrentImage(imageSrc);
      addImage(imageSrc, selectedMealDate.category, selectedMealDate.date.format('YYYY-MM-DD'));
    }

    enqueueSnackbar('사진 촬영 완료!', { variant: 'success' });
  }, [webcamRef]);

  const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setCurrentImage(reader.result as string);
        addImage(reader.result as string, selectedMealDate.category, selectedMealDate.date.format('YYYY-MM-DD'));
        enqueueSnackbar('사진 준비 완료!', { variant: 'success' });
      };
    } else {
      enqueueSnackbar('파일을 업로드하지 못했습니다.', { variant: 'error' });
    }
  };

  const handleDateChange = (name: string, value: Dayjs | MealTime | null) => {
    if (value) {
      setSelectedMealDate({ ...selectedMealDate, [name]: value });
    }
  };

  const handleRemoveImage = () => {
    setCurrentImage(null);
  };

  const handleGoHome = () => {
    push('MainActivity', {}, { animate: false });
  };

  return (
    <AppScreen>
      {missingMeals.length === 0 ? (
        <CenterContainer height={'100%'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
          <img src={VITA} alt="placeholder" width={'80%'} />
          <Typography variant="h4" color="secondary">
            오늘의 식사를 모두 등록하셨어요!
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleGoHome} sx={{ mt: 2 }}>
            홈으로 돌아가기
          </Button>
        </CenterContainer>
      ) : (
        <>
          <DateSelect
            selectedMealDate={selectedMealDate}
            onDateChange={handleDateChange}
            availableMealTimes={missingMeals}
          />
          {!currentImage && <Camera webcamRef={webcamRef} />}
          {currentImage && (
            <>
              <ImageBox>
                <Image src={currentImage} alt="captured" />
              </ImageBox>
              <Typography sx={{ ml: 2 }} variant="caption">
                잠깐! 음식사진이 맞는지 확인 후 분석을 시작해주세요.
              </Typography>
            </>
          )}
          <CameraControlBox
            capture={capture}
            upload={upload}
            capturedImage={currentImage}
            removeImage={handleRemoveImage}
            handleClick={handleClick}
          />
        </>
      )}
      <BottomNavigation />
    </AppScreen>
  );
};

export default CameraActivity;

export const ImageBox = styled(Box)({
  width: '90%',
  height: 'auto',
  overflow: 'hidden',
  borderRadius: 16,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  margin: '18px',
});

const Image = styled('img')({
  width: '100%',
  objectFit: 'cover',
});
