import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

import { Box, Button } from '@mui/material';
import { PostMealDto } from '@repo/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import type { ActivityComponentType } from '@stackflow/react';
import dayjs, { Dayjs } from 'dayjs';
import { enqueueSnackbar } from 'notistack';

import Camera from './Camera/Camera';
import CameraControlBox from './Camera/CameraControlBox';
import { DateSelect } from './DateSelect';
import { BottomNavigation } from '../../components/BottomNavigation';
import { useFlow } from '../../layouts/stackflow';
import { useCapturedImage, useSetCapturedImage } from '../../recoil/capturedImage';
import { MEAL_TIME, type MealTime } from '../../types/Meal';


const CameraActivity: ActivityComponentType = () => {
  const webcamRef = useRef<Webcam>(null);
  const { push } = useFlow();
  const capturedImage = useCapturedImage();

  const [selectedMealDate, setSelectedMealDate] = useState<{ date: Dayjs; category: MealTime }>({
    date: dayjs(),
    category: MEAL_TIME.BREAKFAST,
  });
  const postData: PostMealDto = {
    date: selectedMealDate.date.toDate(),
    category: selectedMealDate.category,
    image: capturedImage || '',
  };

  const handleClick = async () => {
    push('CapturedActivity', { postData: postData });
  };

  const setImage = useSetCapturedImage();

  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    enqueueSnackbar('사진 촬영 완료!', { variant: 'success' });
  }, [webcamRef]);

  const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result as string);
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

  return (
    <AppScreen>
      <DateSelect selectedMealDate={selectedMealDate} onDateChange={handleDateChange} />
      <Camera webcamRef={webcamRef} />
      <CameraControlBox capture={capture} upload={upload} />
      <Box display="flex" justifyContent="center" p={4}>
        <Button variant="contained" onClick={handleClick} disabled={!capturedImage} fullWidth>
          분석 시작
        </Button>
      </Box>
      <BottomNavigation />
    </AppScreen>
  );
};

export default CameraActivity;
