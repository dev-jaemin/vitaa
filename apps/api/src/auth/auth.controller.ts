import { Body, Controller, Get, HttpCode, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('/kakao/callback')
  async getHello(@Body('code') code: string): Promise<string> {
    const token = await this.authService.getAccessToken(code);

    return token;
  }

  @Get('kakao')
  @UseGuards(AuthGuard('kakao'))
  @HttpCode(301)
  async kakaoLogin(@Req() req: Request, @Res() res: Response) {
    const { accessToken, refreshToken } = await this.authService.getJWT(req.user.kakaoId);
    res.cookie('accessToken', accessToken, { httpOnly: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    res.cookie('isLoggedIn', true, { httpOnly: false });
    return res.redirect(this.configService.get('WEB_URL'));
  }

  @Post('refresh')
  @HttpCode(200)
  async refresh(@Req() req: Request, @Res() res: Response) {
    try {
      const newAccessToken = await this.authService.refresh(req.headers.authorization);

      return res.send({ accessToken: newAccessToken });
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
