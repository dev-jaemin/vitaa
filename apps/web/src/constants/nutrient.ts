export const koreanNutrient = {
  CALORIES: '칼로리',
  CARBS: '탄수화물',
  PROTEIN: '단백질',
  FAT: '지방',
  SUGAR: '당류',
  CALCIUM: '칼슘',
  SALT: '나트륨',
};

type defaultColor = 'warning' | 'primary' | 'success' | 'info' | 'error' | 'secondary' | 'inherit';

type NutrientColor = {
  CALORIES: defaultColor;
  CARBS: defaultColor;
  PROTEIN: defaultColor;
  FAT: defaultColor;
  SUGAR: defaultColor;
  CALCIUM: defaultColor;
  SALT: defaultColor;
};

export const nutrientColors: NutrientColor = {
  CALORIES: 'warning',
  CARBS: 'primary',
  PROTEIN: 'success',
  FAT: 'info',
  SUGAR: 'error',
  CALCIUM: 'secondary',
  SALT: 'warning',
};
