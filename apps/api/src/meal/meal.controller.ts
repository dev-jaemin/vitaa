import { Body, Controller, Get, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { MealService } from './meal.service';
import { PostMealDto } from '@repo/ui/types';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('meal')
export class MealController {
  constructor(private mealService: MealService) {}

  // GET /meal/:date - 날짜별 음식 조회
  @Get('/')
  getMealByDate(@Query('date') date: Date) {
    return this.mealService.findMealByDate(date);
  }

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  createMeal(@Req() req: Request, @Res() res: Response, @Body() body: PostMealDto) {
    try {
      this.mealService.createMeal({ ...body, kakaoId: req.user.id });
      return res.send({ message: 'success' });
    } catch (err) {
      return res.send({ message: 'error' });
    }
  }
}
