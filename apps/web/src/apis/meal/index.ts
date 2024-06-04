import { Meal, PostMealDto } from '@repo/ui';
import ApiManager from '../ApiManager';

export const getMealByDate = async (date: string): Promise<Meal[]> => {
  const response = await ApiManager.get(`/meal?date=${date}`);
  return response.data;
};

export const postMealByDate = async (meal: PostMealDto): Promise<Meal> => {
  const response = await ApiManager.post(`/meal`, meal);
  return response.data;
};
