import { Controller, Get, Param } from '@nestjs/common';

@Controller('meal')
export class MealController {
  // GET /Meal/:date - 날짜별 음식 조회
  @Get(':date')
  getMealByDate(@Param('date') date: string) {
    return `☀️ ${date} 날짜별 음식 조회`;
  }
}
