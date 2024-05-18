import { Module } from '@nestjs/common';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meal } from './meal.entity';
import { User } from 'src/auth/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meal, User])],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
