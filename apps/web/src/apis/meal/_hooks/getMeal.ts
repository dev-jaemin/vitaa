import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { getMealByDate } from '..';

export const useGetMealByDate = (date: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.MEAL_BY_DATE, date],
    queryFn: () => getMealByDate(date),
  });
};
