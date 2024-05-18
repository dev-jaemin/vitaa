import { useQuery } from '../../../config/react-query/useQuery';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { enqueueSnackbar } from 'notistack';
import { useFlow } from '../../../layouts/stackflow';
import { getChats } from '..';

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
