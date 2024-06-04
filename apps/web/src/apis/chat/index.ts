import { ChatDto, ChatInferDto } from '@repo/ui';
import ApiManager from '../ApiManager';

export const getChats = async (): Promise<ChatDto[]> => {
  const response = await ApiManager.get('/chat');
  return response.data;
};

export const postChat = async (data: ChatInferDto) => {
  const response = await ApiManager.post('/chat/infer', data);
  return response.data;
};
