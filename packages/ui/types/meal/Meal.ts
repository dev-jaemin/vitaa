export interface Meal {
  id: number;
  userId: number;
  date: Date;
  category: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  image: string;
  rating: string;
  review: string;
  createdAt: Date;
}
