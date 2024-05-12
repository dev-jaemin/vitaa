import { Controller, Get, Query } from '@nestjs/common';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController {
  constructor(private mealService: MealService) {}

  // GET /meal/:date - 날짜별 음식 조회
  @Get('/')
  getMealByDate(@Query('date') date: Date) {
    return this.mealService.findMealByDate(date);
  }
}
