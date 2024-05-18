import { Body, Controller, Get, Post, Query, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { MealService } from './meal.service';
import { PostMealDto } from '@repo/ui/types';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

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
  @UseInterceptors(FileInterceptor('image'))
  async createMeal(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: PostMealDto,
  ) {
    try {
      const result = await this.mealService.createMeal({ ...body, image: file, userId: req.user.id });
      return res.send(result);
    } catch (err) {
      return res.send({ message: 'error' });
    }
  }
}
