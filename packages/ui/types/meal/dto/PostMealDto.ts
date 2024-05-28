export interface PostMealDto {
  userId?: number;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  image: Express.Multer.File | string;
  date: Date;
}
