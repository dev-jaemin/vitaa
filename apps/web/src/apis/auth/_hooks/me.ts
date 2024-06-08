import { getUserInfo } from '..';
import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { UseQueryResult } from '@tanstack/react-query';

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.ME],
    queryFn: () => getUserInfo(),
  });
};
