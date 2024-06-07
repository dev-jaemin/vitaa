import { useQueryClient } from 'react-query';

import { ChatInferDto } from '@repo/ui';
import { enqueueSnackbar } from 'notistack';

import { postChat } from '..';
import { useMutation } from '../../../config/react-query/useMutation';
import { QUERY_KEYS } from '../../../constants/queryKeys';
import { useSetIsLoadingChat } from '../../../recoil/chat';

export const usePostChat = () => {
  const queryClient = useQueryClient();
  const setIsLoadingChat = useSetIsLoadingChat();

  return useMutation((data: ChatInferDto) => postChat(data), {
    onError: () => {
      enqueueSnackbar('채팅 전송에 실패했습니다. 잠시 뒤 다시 시도해주세요', { variant: 'warning' });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.CHATS);
    },
    onSettled: () => {
      setIsLoadingChat(false);
    },
  });
};
