import { Grid, styled } from '@mui/material';
import IndividualNutrient from './IndividualNutrient';

interface NutrientBoxProps {
  // mass: number;
  // nutrient: Nutrient;
  // percentage: number;
  // unit?: string;
}

const NutrientBox: React.FC<NutrientBoxProps> = () => {
  return (
    <BoxContainer container>
      <IndividualNutrient mass={0} nutrient={'CALORIES'} percentage={0} unit="kcal" />
      <IndividualNutrient mass={0} nutrient={'CARBS'} percentage={28} />
      <IndividualNutrient mass={0} nutrient={'PROTEIN'} percentage={89} />
      <IndividualNutrient mass={0} nutrient={'FAT'} percentage={45} />
    </BoxContainer>
  );
};

export default NutrientBox;

const BoxContainer = styled(Grid)(({ theme }) => ({
  borderRadius: 24,
  backgroundColor: theme.colors.secondary.lighter,
  width: '90%',
  padding: 16,
}));
