import { PostMealDto } from '@repo/ui';
import ApiManager from '../ApiManager';

export const getMealByDate = async (date: string): Promise<PostMealDto[]> => {
  const response = await ApiManager.get(`/meal?date=${date}`);
  return response.data;
};
