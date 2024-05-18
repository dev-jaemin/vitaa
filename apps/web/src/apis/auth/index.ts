import { RegisterDto, User } from '@repo/ui';
import ApiManager from '../ApiManager';

export const getUserInfo = async (): Promise<User> => {
  const response = await ApiManager.get('/auth/me');
  return response.data;
};

export const postRegister = async (data: RegisterDto) => {
  const response = await ApiManager.post('/auth/register', data);
  return response.data;
};
