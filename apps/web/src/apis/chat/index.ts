import ApiManager from '../ApiManager';

export const getChats = async (): Promise<any> => {
  const response = await ApiManager.get('/chat');
  return response.data;
};
