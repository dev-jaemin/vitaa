import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useFlow } from '../../layouts/stackflow';
import { useSetCapturedImage } from '../../recoil/capturedImage';
import CameraControlBox from './Camera/CameraControlBox';
import { enqueueSnackbar } from 'notistack';
import Camera from './Camera/Camera';
import { DateSelect } from './DateSelect';
import { MEAL_TIME, type MealTime } from '../../types/meal';
import dayjs, { Dayjs } from 'dayjs';

const CameraActivity: ActivityComponentType = () => {
  const webcamRef = useRef<Webcam>(null);
  const { push } = useFlow();
  const [selectedMealDate, setSelectedMealDate] = useState<{ date: Dayjs; meal: MealTime }>({
    date: dayjs(),
    meal: MEAL_TIME.BREAKFAST,
  });

  // const { mutateAsync } = usePostMealByDate('', selectedMeal);

  const handleClick = () => {
    // mutateAsync();
    push('CapturedActivity', {});
  };

  const setImage = useSetCapturedImage();

  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    handleClick();
  }, [webcamRef]);

  const upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      handleClick();
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
      <BottomNavigation />
    </AppScreen>
  );
};

export default CameraActivity;
