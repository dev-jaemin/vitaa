import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 가드 인증 예시
  @Get('hello')
  @UseGuards(AuthGuard('jwt'))
  get(@Req() req: Request) {
    console.log(req.user.id);
    return 'JWT 인증 성공';
  }
}
