import { Body, Controller, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/kakao/callback')
  async getHello(@Body('code') code: string): Promise<string> {
    const token = await this.authService.getAccessToken(code);

    return token;
  }
}
