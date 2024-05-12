import { Module } from '@nestjs/common';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meal } from './meal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meal])],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
