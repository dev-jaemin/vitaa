import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Meal } from './meal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PostMealDto } from '@repo/ui/types';
import { inferenceAxiosInstance } from 'src/common/service/axiosInstance';
import { User } from 'src/auth/user.entity';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(Meal) private mealRepository: Repository<Meal>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findMealByDate(userId: number, date: Date) {
    return this.mealRepository.find({ where: { userId, date } });
  }

  async createMeal(meal: PostMealDto) {
    // meal inference
    const user = await this.userRepository.findOne({ where: { id: meal.userId } });

    const bodyForInference = {
      image: meal.image,
      food_category: meal.category,
      user_data: {
        gender: user.gender,
        age: user.age,
        weight: user.weight,
        height: user.height,
        goal: user.goal,
      },
    };

    const { data: inferenceData } = await inferenceAxiosInstance.post('/meal_infer', bodyForInference);

    // @TODO : base64 image to s3 upload or server url
    const s3Image = 'not yet implemented';

    const mealForCreate = {
      userId: user.id,
      date: meal.date,
      image: s3Image,
      rating: inferenceData.rating,
      review: inferenceData.review,
      calories: inferenceData.meal_total.calories,
      carbs: inferenceData.meal_total.carbs,
      protein: inferenceData.meal_total.protein,
      fat: inferenceData.meal_total.fat,
    };

    await this.mealRepository.save(mealForCreate);

    return mealForCreate;
  }
}
