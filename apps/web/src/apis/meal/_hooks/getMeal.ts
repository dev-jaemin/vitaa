import { getMealByDate } from '..';
import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';
// import { useAuthUser } from '../../../providers';

export const useGetMealByDateQuery = (date: string) => {
  // const user = useAuthUser();

  return useQuery({
    queryKey: [QUERY_KEYS.MEAL_BY_DATE, date],
    queryFn: () => getMealByDate(date),
    // enabled: !!user,
  });
};
