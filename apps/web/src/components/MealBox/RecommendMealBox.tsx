
import { ChevronRight } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';

import useMealImage from '../../activities/MainActivity/_hooks/useMealImage';
import koreanMeal from '../../constants/meal';
import { useFlow } from '../../layouts/stackflow';
import { MealTime } from '../../types/Meal';
import { FlexContainer, SpaceBetweenContainer } from '../Containers/ScreenContainer';

const RecommendMealBox = ({ mealCategory }: { mealCategory: MealTime }) => {
  const image = useMealImage(mealCategory);
  const { push } = useFlow();

  const handleMealClick = () => {
    push('ChatBottomSheet', { message: '오늘 하루 내게 딱! 맞는 ' + koreanMeal[mealCategory] + ' 추천 받기' });
  };

  return (
    <BoxContainer textAlign={'center'} onClick={handleMealClick}>
      <SpaceBetweenContainer>
        <FlexContainer>
          <MealImage src={image} alt="meal" />
          <Box ml={1}>
            <>
              <Typography variant="caption">오늘 하루 내게 딱! 맞는</Typography>
              <RecommendText variant="h6">{koreanMeal[mealCategory]} 추천 받기</RecommendText>
            </>
          </Box>
        </FlexContainer>
        <ChevronRight color="success" />
      </SpaceBetweenContainer>
    </BoxContainer>
  );
};

export default RecommendMealBox;

const BoxContainer = styled(Box)(({ theme }) => ({
  borderRadius: 24,
  backgroundColor: theme.colors.secondary.lighter,
  width: '100%',
  padding: 16,
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:active': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}));

const RecommendText = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  fontWeight: 'bold',
  background: theme.colors.gradients.purple1,
  backgroundClip: 'text',
  color: theme.colors.gradients.purple1,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const MealImage = styled('img')({
  width: 48,
  height: 48,
});
