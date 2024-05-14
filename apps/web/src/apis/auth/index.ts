import { User } from '@repo/ui';
import ApiManager from '../ApiManager';

export const getUserInfo = async (): Promise<User> => {
  const response = await ApiManager.get('/auth/me');
  return response.data;
};
