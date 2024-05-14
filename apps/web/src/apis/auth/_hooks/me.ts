import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { getUserInfo } from '..';

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: QUERY_KEYS.ME,
    queryFn: () => getUserInfo(),
    
  });
};
