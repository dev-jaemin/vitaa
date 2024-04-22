import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, styled } from '@mui/material';
import { Meal } from '../../types/Meal';
import { ExpandMore } from '@mui/icons-material';
import NutrientBox from '../NutrientBox/NutrientBox';

interface InfoAccordionProps {
  mealId: number | null;
  currentCalories: number;
  maxCalories: number;
  foodCount: number;
  mealCategory: Meal;
}

const InfoAccordion: React.FC<InfoAccordionProps> = () => {
  return (
    <AccordionContainer>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>오늘 영양 정보 보기</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <NutrientBox mass={0} nutrient={'CALORIES'} percentage={0} unit='kcal' />
          <NutrientBox mass={0} nutrient={'CARBS'} percentage={28} />
          <NutrientBox mass={0} nutrient={'PROTEIN'} percentage={89} />
          <NutrientBox mass={0} nutrient={'FAT'} percentage={45} />
          <NutrientBox mass={0} nutrient={'SUGAR'} percentage={12} />
          <NutrientBox mass={0} nutrient={'CALCIUM'} percentage={0} />
        </Grid>
      </AccordionDetails>
    </AccordionContainer>
  );
};

export default InfoAccordion;

const AccordionContainer = styled(Accordion)(({ theme }) => ({
  borderRadius: 24,
  backgroundColor: theme.colors.secondary.lighter,
  width: '80%',
  padding: 12,
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:active': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}));
