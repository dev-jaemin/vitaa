import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { getUserInfo } from '..';
import { enqueueSnackbar } from 'notistack';
import { useFlow } from '../../../layouts/stackflow';

export const useGetUserInfo = () => {
  const { push } = useFlow();
  return useQuery({
    queryKey: QUERY_KEYS.ME,
    queryFn: () => getUserInfo(),
    options: {
      onError: () => {
        enqueueSnackbar('비타에 로그인 해 주세요!', { variant: 'warning' });
        push('AuthActivity', {});
      },
    },
  });
};
