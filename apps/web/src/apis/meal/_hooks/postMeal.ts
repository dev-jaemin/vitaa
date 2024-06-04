import { postMealByDate } from '..';
import { PostMealDto } from '@repo/ui';
import { useMutation } from '../../../config/react-query/useMutation';

export const usePostMealByDate = (meal: PostMealDto) => {
  return useMutation(() => postMealByDate(meal), {}, { successMessage: '식사가 등록되었습니다.' });
};
