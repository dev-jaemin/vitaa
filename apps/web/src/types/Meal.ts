export const MEAL_TIME = {
  BREAKFAST: 'Breakfast',
  LUNCH: 'Lunch',
  DINNER: 'Dinner',
  SNACK: 'Snack',
} as const;

export type MealTime = (typeof MEAL_TIME)[keyof typeof MEAL_TIME];

export const NUTRIENTS = {
  CALORIES: 'calories',
  CARBS: 'carbs',
  PROTEIN: 'protein',
  FAT: 'fat',
  SUGAR: 'sugar',
  CALCIUM: 'calcium',
  SALT: 'salt',
} as const;

export type Nutrient = (typeof NUTRIENTS)[keyof typeof NUTRIENTS];
