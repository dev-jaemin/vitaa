import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigAppModule } from './config/config.module';

@Module({
  imports: [AuthModule, ConfigAppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
