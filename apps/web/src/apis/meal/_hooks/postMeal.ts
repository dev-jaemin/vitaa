import { PostMealDto } from '@repo/ui';

import { postMealByDate } from '..';
import { useMutation } from '../../../config/react-query/useMutation';

export const usePostMealByDate = (meal: PostMealDto) => {
  return useMutation(
    () => postMealByDate(meal),
    {},
    { successMessage: '식사가 등록되었습니다.', errorMessage: '식단 분석에 실패했습니다. 다시 시도해 주세요.' },
  );
};
