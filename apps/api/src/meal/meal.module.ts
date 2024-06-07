import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';

import { MealController } from './meal.controller';
import { Meal } from './meal.entity';
import { MealService } from './meal.service';


@Module({
  imports: [TypeOrmModule.forFeature([Meal, User])],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
