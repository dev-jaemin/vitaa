import { enqueueSnackbar } from 'notistack';

import { getUserInfo } from '..';
import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { useFlow } from '../../../layouts/stackflow';
import { useSetUser } from '../../../recoil/auth';

export const useGetUserInfo = () => {
  const { push } = useFlow();
  const setUser = useSetUser();

  return useQuery({
    queryKey: QUERY_KEYS.ME,
    queryFn: () => getUserInfo(),
    options: {
      onSuccess: data => {
        setUser(data);
      },
      onError: () => {
        enqueueSnackbar('비타에 로그인 해 주세요!', { variant: 'warning' });
        push('AuthActivity', {});
      },
    },
  });
};
