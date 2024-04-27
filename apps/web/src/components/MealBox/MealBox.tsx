import { Box, Typography, styled } from '@mui/material';
import { Meal } from '../../types/meal';
import useMealImage from '../../activities/MainActivity/_hooks/useMealImage';
import { FlexContainer, SpaceBetweenContainer } from '../Containers/ScreenContainer';
import { ChevronRight } from '@mui/icons-material';
import koreanMeal from '../../constants/meal';
import { useFlow } from '../../layouts/stackflow';

interface MealBoxProps {
  mealId: number | null;
  currentCalories: number;
  maxCalories: number;
  foodCount: number;
  mealCategory: Meal;
}

const MealBox: React.FC<MealBoxProps> = ({ mealId, currentCalories, maxCalories, foodCount, mealCategory }) => {
  const image = useMealImage(mealCategory);
  const { push } = useFlow();

  const handleMealClick = () => {
    push('MealActivity', { mealId });
  };

  const isRecommendMode = mealId === null;

  return (
    <BoxContainer textAlign={'center'} onClick={handleMealClick}>
      <SpaceBetweenContainer>
        <FlexContainer>
          <MealImage src={image} alt="meal" />
          <Box ml={1}>
            {isRecommendMode ? (
              <>
                <Typography variant="caption">오늘 하루 내게 딱! 맞는</Typography>
                <RecommendText variant="h6">{koreanMeal[mealCategory]} 추천 받기</RecommendText>
              </>
            ) : (
              <>
                <Typography variant="h6" textAlign={'left'}>
                  {koreanMeal[mealCategory]}
                </Typography>
                <Typography variant="body2">
                  <strong>{foodCount}</strong>개 - <strong>{currentCalories}</strong> / {maxCalories} kcal{' '}
                </Typography>
              </>
            )}
          </Box>
        </FlexContainer>
        <ChevronRight color="success" />
      </SpaceBetweenContainer>
    </BoxContainer>
  );
};

export default MealBox;

const BoxContainer = styled(Box)(({ theme }) => ({
  borderRadius: 24,
  backgroundColor: theme.colors.secondary.lighter,
  width: '90%',
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
