import { Box, Typography, styled } from '@mui/material';
import { FlexContainer, SpaceBetweenContainer } from '../Containers/ScreenContainer';
import { PostMealDto } from '@repo/ui';
import useReviewProps from '../../activities/MainActivity/MealList/_hooks/useReviewProps';

const ReviewBox = ({ meal }: { meal: PostMealDto }) => {
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
