import { Grid, Typography, styled } from '@mui/material';
import IndividualNutrient from './IndividualNutrient';
import accumulateMeal from '../../utils/meal/accumulateMeal';
import getPercentage from '../../utils/meal/getPercentage';
import { Meal } from '@repo/ui';
import { useUserMaxNut } from '../../recoil/userDailyNutrient';
import { NUTRIENTS } from '../../types/Meal';

const NutrientBox = ({ meals, isShowHeader }: { meals: Meal[]; isShowHeader?: boolean }) => {
  const { maxCalories, maxCarbs, maxProteins, maxFat } = useUserMaxNut();

  const { calories, fat, carbs, protein } = accumulateMeal(meals);
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
        nutrient={NUTRIENTS.CALORIES}
        percentage={getPercentage(calories, maxCalories)}
        unit="kcal"
        isAll={isAll}
      />
      <IndividualNutrient
        mass={carbs}
        nutrient={NUTRIENTS.CARBS}
        percentage={getPercentage(carbs, maxCarbs)}
        isAll={isAll}
      />
      <IndividualNutrient
        mass={protein}
        nutrient={NUTRIENTS.PROTEIN}
        percentage={getPercentage(protein, maxProteins)}
        isAll={isAll}
      />
      <IndividualNutrient mass={fat} nutrient={NUTRIENTS.FAT} percentage={getPercentage(fat, maxFat)} isAll={isAll} />
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
