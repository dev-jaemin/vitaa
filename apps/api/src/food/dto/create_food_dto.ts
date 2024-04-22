type Nutrient = number | null;

export class CreateFoodDto {
  meal_id: number;
  name: string;
  size: string;
  calories: Nutrient;
  carbs: Nutrient;
  protein: Nutrient;
  fat: Nutrient;
  calcium: Nutrient;
  vitamin: Nutrient;
  salt: Nutrient;
  sugar: Nutrient;
}
