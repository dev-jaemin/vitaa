export const MEAL_TIME = {
  BREAKFAST: 'Breakfast',
  LUNCH: 'Lunch',
  DINNER: 'Dinner',
  SNACK: 'Snack',
} as const;

export type MealTime = (typeof MEAL_TIME)[keyof typeof MEAL_TIME];

export const NUTRIENTS = {
  CALORIES: 'CALORIES',
  CARBS: 'CARBS',
  PROTEIN: 'PROTEIN',
  FAT: 'FAT',
  SUGAR: 'SUGAR',
  CALCIUM: 'CALCIUM',
  SALT: 'salt',
} as const;

export type Nutrient = keyof typeof NUTRIENTS;
