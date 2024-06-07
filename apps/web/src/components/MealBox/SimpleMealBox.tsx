import React from 'react';

import { Box, Typography, styled } from '@mui/material';

import useMealImage from '../../activities/MainActivity/_hooks/useMealImage';
import koreanMeal from '../../constants/meal';
import { MealTime } from '../../types/Meal';
import { FlexContainer, SpaceBetweenContainer } from '../Containers/ScreenContainer';


interface SimpleMealBoxProps {
  mealCategory: MealTime;
  icon: React.ReactNode;
  onClick: (selectedMeal: MealTime) => void;
}

const SimpleMealBox: React.FC<SimpleMealBoxProps> = ({ mealCategory, icon, onClick }) => {
  const image = useMealImage(mealCategory);

  return (
    <BoxContainer textAlign={'center'} onClick={() => onClick(mealCategory)} mb={2}>
      <SpaceBetweenContainer>
        <FlexContainer>
          <MealImage src={image} alt="meal" />
          <Box ml={1}>
            <>
              <Typography variant="h6" textAlign={'left'}>
                {koreanMeal[mealCategory]}
              </Typography>
            </>
          </Box>
        </FlexContainer>
        {icon}
      </SpaceBetweenContainer>
    </BoxContainer>
  );
};

export default SimpleMealBox;

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
