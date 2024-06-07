import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { configModuleOptions } from './common/config/config.config';
import { TypeOrmConfig } from './common/config/typeorm.config';
import { FoodModule } from './food/food.module';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    MealModule,
    TypeOrmModule.forRootAsync(TypeOrmConfig),
    AuthModule,
    FoodModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
