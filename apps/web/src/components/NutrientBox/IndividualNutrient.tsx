import { Grid, LinearProgress, Typography } from '@mui/material';
import { Nutrient } from '../../types/meal';
import { SpaceBetweenContainer } from '../Containers/ScreenContainer';
import { koreanNutrient, nutrientColors } from '../../constants/nutrient';

interface IndividualNutrientProps {
  mass: number;
  nutrient: Nutrient;
  percentage: number;
  unit?: string;
}

const IndividualNutrient: React.FC<IndividualNutrientProps> = ({ mass, nutrient, percentage, unit = 'g' }) => {
  const color = nutrientColors[nutrient];

  return (
    <Grid item sm={6} p={1}>
      <Typography variant="h3" display={'inline'}>
        {mass}
      </Typography>
      <Typography variant="subtitle1" display={'inline'}>
        &nbsp;{unit}
      </Typography>
      <SpaceBetweenContainer>
        <Typography variant="caption">전체 {koreanNutrient[nutrient]}</Typography>
        <Typography variant="caption">{percentage}%</Typography>
      </SpaceBetweenContainer>
      <LinearProgress variant="determinate" value={percentage} color={color} sx={{ mt: 2, color: 'red' }} />
    </Grid>
  );
};

export default IndividualNutrient;