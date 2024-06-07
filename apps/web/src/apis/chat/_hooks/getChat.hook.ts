import { useQueryClient } from 'react-query';

import { enqueueSnackbar } from 'notistack';

import { getChats } from '..';
import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { useFlow } from '../../../layouts/stackflow';


export const useGetChats = () => {
  const { push } = useFlow();

  return useQuery({
    queryKey: QUERY_KEYS.CHATS,
    queryFn: () => getChats(),
    options: {
      onError: () => {
        enqueueSnackbar('채팅내역을 불러오는데 실패했습니다. 잠시 뒤 다시 시도해주세요', { variant: 'warning' });
        push('MainActivity', {});
      },
    },
  });
};

export const usePrefetchChat = async () => {
  const queryClient = useQueryClient();

  await queryClient.prefetchQuery({
    queryKey: QUERY_KEYS.CHATS,
    queryFn: () => getChats(),
  });
};
