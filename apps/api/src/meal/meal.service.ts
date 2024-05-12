import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Meal } from './meal.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MealService {
  constructor(@InjectRepository(Meal) private mealRepository: Repository<Meal>) {}

  async findMealByDate(date: Date) {
    return this.mealRepository.find({ where: { date } });
  }
}
