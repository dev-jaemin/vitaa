import { getUserInfo } from '..';
import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.ME],
    queryFn: () => getUserInfo(),
  });
};
