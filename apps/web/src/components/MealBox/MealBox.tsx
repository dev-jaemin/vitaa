import { ChevronRight } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';
import { Meal } from '@repo/ui';

import useMealImage from '../../activities/MainActivity/_hooks/useMealImage';
import koreanMeal from '../../constants/meal';
import { useFlow } from '../../layouts/stackflow';
import { FlexContainer, SpaceBetweenContainer } from '../Containers/ScreenContainer';


const MealBox = ({ meal, max, isDisableClick }: { meal: Meal; max: number; isDisableClick?: boolean }) => {
  const { calories, category } = meal;
  const image = useMealImage(category);
  const { push } = useFlow();

  const handleMealClick = () => {
    if (isDisableClick) return;
    push('MealActivity', { meal: meal });
  };

  return (
    <BoxContainer textAlign={'center'} onClick={handleMealClick}>
      <SpaceBetweenContainer>
        <FlexContainer>
          <MealImage src={image} alt="meal" />
          <Box ml={1}>
            <>
              <Typography variant="h6" textAlign={'left'}>
                {koreanMeal[category]}
              </Typography>
              <Typography variant="body2">
                <strong>{calories}</strong> / {max} kcal{' '}
              </Typography>
            </>
          </Box>
        </FlexContainer>
        {!isDisableClick && <ChevronRight color="success" />}
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

const MealImage = styled('img')({
  width: 48,
  height: 48,
});
