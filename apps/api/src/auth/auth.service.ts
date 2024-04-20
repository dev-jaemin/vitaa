import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import axios, { AxiosResponse } from 'axios';
import * as bcrypt from 'bcrypt';

import { User } from '@repo/ui/types';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async getAccessToken(code: string) {
    // 백엔드 auth 서버로 code를 전송해서 accessToken 발급
    const kakao_api_url = `${this.configService.get<string>('KAKAO_AUTH_SERVER_URI')}?grant_type=authorization_code&client_id=${this.configService.get<string>('KAKAO_CLIENT_ID')}&redirect_url=${encodeURI(this.configService.get<string>('KAKAO_AUTH_REDIRECT_URI'))}&code=${code}`;

    try {
      const response: AxiosResponse<string> = await axios.post(kakao_api_url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getJWT(kakaoId: number) {
    const user = await this.kakaoValidateUser(kakaoId); // 카카오 정보 검증 및 회원가입 로직
    const accessToken = this.generateAccessToken(user); // AccessToken 생성
    const refreshToken = await this.generateRefreshToken(user); // refreshToken 생성
    return { accessToken, refreshToken };
  }

  // TODO : userRepository 추가 및 mock data 수정
  async kakaoValidateUser(kakaoId: number): Promise<User> {
    // let user: User = await this.usersRepository.findUserByKakaoId(kakaoId); // 유저 조회

    let user: User = {
      id: 1,
      kakaoId: kakaoId,
      name: '김재민',
    };
    // if (!user) {
    //   user = await this.usersRepository.create({
    //     kakaoId,
    //   });
    // }
    return user;
  }

  generateAccessToken(user: User): string {
    const payload = {
      id: user.id,
    };
    return this.jwtService.sign(payload);
  }

  // TODO : userRepository 추가
  async generateRefreshToken(user: User): Promise<string> {
    const payload = {
      userId: user.id,
    };

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRES_IN'),
    });

    const saltOrRounds = 10;
    const currentRefreshToken = await bcrypt.hash(refreshToken, saltOrRounds);

    // await this.usersRepository.setCurrentRefreshToken(payload.userId, currentRefreshToken);

    return refreshToken;
  }

  async refresh(refreshToken: string): Promise<string> {
    try {
      // 1차 검증
      const decodedRefreshToken = this.jwtService.verify(refreshToken, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });
      const userId = decodedRefreshToken.userId;

      // 데이터베이스에서 User 객체 가져오기
      // const user = await this.usersRepository.getUserWithCurrentRefreshToken(userId);
      const user: User = {
        id: userId,
        kakaoId: decodedRefreshToken.kakaoId,
        name: '김재민',
      };

      // 2차 검증
      // const isRefreshTokenMatching = await bcrypt.compare(refreshToken, user.currentRefreshToken);

      // if (!isRefreshTokenMatching) {
      //   throw new UnauthorizedException('Invalid refresh-token');
      // }

      // 새로운 accessToken 생성
      const accessToken = this.generateAccessToken(user);

      return accessToken;
    } catch (err) {
      throw new UnauthorizedException('Invalid refresh-token');
    }
  }
}
