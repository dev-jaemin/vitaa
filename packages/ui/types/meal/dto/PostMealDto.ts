export interface PostMealDto {
  kakaoId?: number;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  image: string;
  date: Date;
  calories: number;
  carbs?: number;
  protein?: number;
  fat?: number;
  rating?: 'A' | 'B' | 'C' | 'D' | 'E';
  review?: string;
}
