import { Grid, Typography, styled } from '@mui/material';
import IndividualNutrient from './IndividualNutrient';
import accumulateMeal from '../../utils/meal/accumulateMeal';
import getPercentage from '../../utils/meal/getPercentage';
import { PostMealDto } from '@repo/ui';

const tempMaxNutrients = {
  calories: 3000,
  carbs: 300,
  protein: 100,
  fat: 100,
};

const NutrientBox = ({ meals, isShowHeader }: { meals: PostMealDto[]; isShowHeader?: boolean }) => {
  const { calories, fat, carbs, protein } = accumulateMeal(meals);
  const { calories: maxCalories, carbs: maxCarbs, protein: maxProtein, fat: maxFat } = tempMaxNutrients;
  const isAll = meals.length > 1;
  return (
    <BoxContainer container>
      {isShowHeader && (
        <Grid item sm={12}>
          <Typography variant="h4" textAlign={'center'} mb={1}>
            영양소 분석
          </Typography>
        </Grid>
      )}
      <IndividualNutrient
        mass={calories}
        nutrient={'CALORIES'}
        percentage={getPercentage(calories, maxCalories)}
        unit="kcal"
        isAll={isAll}
      />
      <IndividualNutrient mass={carbs} nutrient={'CARBS'} percentage={getPercentage(carbs, maxCarbs)} isAll={isAll} />
      <IndividualNutrient
        mass={protein}
        nutrient={'PROTEIN'}
        percentage={getPercentage(protein, maxProtein)}
        isAll={isAll}
      />
      <IndividualNutrient mass={fat} nutrient={'FAT'} percentage={getPercentage(fat, maxFat)} isAll={isAll} />
    </BoxContainer>
  );
};

export default NutrientBox;

const BoxContainer = styled(Grid)(({ theme }) => ({
  borderRadius: 24,
  backgroundColor: theme.colors.secondary.lighter,
  width: '95%',
  padding: 16,
}));
