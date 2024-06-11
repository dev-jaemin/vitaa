import { useCapturedImage, useSetCapturedImage } from '../../../recoil/capturedImage';
import { MealTime } from '../../../types/Meal';

const useAddImage = () => {
  const capturedImages = useCapturedImage();
  const setImages = useSetCapturedImage();

  const addImage = (imageSrc: string, mealTime: MealTime, mealDate: string) => {
    setImages([...capturedImages, { url: imageSrc, mealCategory: mealTime, date: mealDate }]);
  };

  return { addImage };
};

export { useAddImage };
