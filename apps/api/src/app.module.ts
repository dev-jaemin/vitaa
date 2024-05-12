import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MealModule } from './meal/meal.module';
import { FoodModule } from './food/food.module';
import { TypeOrmConfig } from './common/config/typeorm.config';
import { configModuleOptions } from './common/config/config.config';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    MealModule,
    TypeOrmModule.forRootAsync(TypeOrmConfig),
    AuthModule,
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
