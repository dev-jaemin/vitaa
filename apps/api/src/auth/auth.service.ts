import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import axios, { AxiosResponse } from 'axios';
import * as bcrypt from 'bcrypt';

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

  async kakaoValidateUser(kakaoId: number): Promise<UserDocument> {
    let user: UserDocument = await this.usersRepository.findUserByKakaoId(kakaoId); // 유저 조회
    if (!user) {
      // 회원 가입 로직
      user = await this.usersRepository.create({
        kakaoId,
        provider: 'kakao',
      });
    }
    return user;
  }

  generateAccessToken(user: UserDocument): string {
    const payload = {
      userId: user._id,
    };
    return this.jwtService.sign(payload);
  }

  async generateRefreshToken(user: UserDocument): Promise<string> {
    const payload = {
      userId: user._id,
    };

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRES_IN'),
    });

    const saltOrRounds = 10;
    const currentRefreshToken = await bcrypt.hash(refreshToken, saltOrRounds);

    await this.usersRepository.setCurrentRefreshToken(payload.userId, currentRefreshToken);

    return refreshToken;
  }
}
