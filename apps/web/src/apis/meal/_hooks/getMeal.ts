import { getMealByDate } from '..';
import useSaveTodayNutrient from '../../../activities/MainActivity/_hooks/useSaveTodayNutrient';
import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { useUser } from '../../../recoil/auth';

export const useGetMealByDate = (date: string) => {
  const user = useUser();
  const { saveNutrient } = useSaveTodayNutrient();

  return useQuery({
    queryKey: [QUERY_KEYS.MEAL_BY_DATE, date],
    queryFn: () => getMealByDate(date),
    options: {
      enabled: !!user,
      onSuccess: data => {
        saveNutrient(data);
      },
    },
  });
};
