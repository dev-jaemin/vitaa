import { Body, Controller, Get, HttpCode, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDto } from '@repo/ui/types';
import { Request, Response } from 'express';

import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Get('kakao')
  @UseGuards(AuthGuard('kakao'))
  @HttpCode(301)
  async kakaoLogin(@Req() req: Request, @Res() res: Response) {
    const isUserRegistered = await this.authService.checkUserExist(req.user.kakaoId);
    console.log(req.user.kakaoId, isUserRegistered);
    if (isUserRegistered) {
      const { accessToken, refreshToken } = await this.authService.getJWT(req.user.kakaoId);
      res.cookie('accessToken', accessToken, { httpOnly: false, secure: true });
      res.cookie('refreshToken', refreshToken, { httpOnly: false, secure: true });
      res.cookie('isLoggedIn', true, { httpOnly: false, secure: true });
      console.log(req.headers);

      return res.redirect(this.configService.get('WEB_URL'));
    }

    res.cookie('kakaoId', req.user.kakaoId, { httpOnly: false, secure: true });
    return res.redirect(`${this.configService.get('WEB_URL')}/register?kakaoId=${req.user.kakaoId}`);
  }

  @Post('refresh')
  @HttpCode(200)
  async refresh(@Req() req: Request, @Res() res: Response) {
    try {
      const newAccessToken = await this.authService.refresh(req.cookies.refreshToken);

      return res.send({ accessToken: newAccessToken });
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  @Post('/register')
  @HttpCode(201)
  async register(@Body() body: RegisterDto, @Res() res: Response) {
    try {
      await this.authService.register(body);

      const { accessToken, refreshToken } = await this.authService.getJWT(body.kakaoId);
      res.cookie('accessToken', accessToken, { httpOnly: true, secure: true, sameSite: 'none' });
      res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'none' });
      res.cookie('isLoggedIn', true, { httpOnly: false, secure: true, sameSite: 'none' });

      return res.send({ message: 'success' });
    } catch (err) {
      console.error(err);
      throw new UnauthorizedException();
    }
  }

  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(200)
  async me(@Req() req: Request) {
    return req.user;
  }
}
