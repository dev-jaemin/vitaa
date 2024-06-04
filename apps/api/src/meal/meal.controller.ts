import { Body, Controller, Get, Post, Query, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { MealService } from './meal.service';
import { PostMealDto } from '@repo/ui/types';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('meal')
export class MealController {
  constructor(private mealService: MealService) {}

  // GET /meal/:date - 날짜별 음식 조회
  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  getMealByDate(@Req() req: Request, @Query('date') date: Date) {
    return this.mealService.findMealByDate(req.user.id, date);
  }

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  async createMeal(@Req() req: Request, @Res() res: Response, @Body() body: PostMealDto) {
    try {
      const result = await this.mealService.createMeal({ ...body, userId: req.user.id });
      return res.send(result);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ message: 'error' });
    }
  }
}
