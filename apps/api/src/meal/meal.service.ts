import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Meal } from './meal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PostMealDto } from '@repo/ui/types';

@Injectable()
export class MealService {
  constructor(@InjectRepository(Meal) private mealRepository: Repository<Meal>) {}

  async findMealByDate(userId: number, date: Date) {
    return this.mealRepository.find({ where: { userId, date } });
  }

  async createMeal(meal: PostMealDto) {
    return this.mealRepository.create(meal);
  }
}
