import { useEffect } from 'react';

import useSaveTodayNutrient from '../../activities/MainActivity/_hooks/useSaveTodayNutrient';
import { useGetMealByDateQuery } from '../../apis/meal/_hooks/getMeal';

export const useGetMealByDate = (date: string) => {
  const { data } = useGetMealByDateQuery(date);
  const { saveNutrient } = useSaveTodayNutrient();

  useEffect(() => {
    if (data) {
      saveNutrient(data);
    }
  }, [data, date]);

  return { data };
};
