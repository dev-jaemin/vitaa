import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';

@Module({
  controllers: [FoodController]
})
export class FoodModule {}
