import { Box, Typography, styled } from '@mui/material';
import { Meal } from '@repo/ui';

import useReviewProps from '../../activities/MainActivity/MealList/_hooks/useReviewProps';
import { FlexContainer, SpaceBetweenContainer } from '../Containers/ScreenContainer';

const ReviewBox = ({ meal }: { meal: Meal }) => {
  const reviewProps = useReviewProps(meal.rating ?? 'E');

  return (
    <BoxContainer textAlign={'center'} style={{ backgroundColor: reviewProps.color }}>
      <SpaceBetweenContainer>
        <FlexContainer>
          <Typography variant="h1" textAlign={'left'}>
            {reviewProps.emoji}
          </Typography>
          <Box ml={1}>
            <>
              <Typography variant="h6" textAlign={'left'}>
                Food Rating
              </Typography>
              <Typography variant="body2" textAlign={'left'}>
                {meal.review}
              </Typography>
            </>
          </Box>
        </FlexContainer>
        <Typography variant="h1" color={reviewProps.fontColor} mx={2}>
          {meal.rating}
        </Typography>
      </SpaceBetweenContainer>
    </BoxContainer>
  );
};

export default ReviewBox;

const BoxContainer = styled(Box)({
  borderRadius: 24,
  width: '90%',
  padding: 16,
});
