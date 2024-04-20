import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async getAccessToken(code: string) {
    // 백엔드 auth 서버로 code를 전송해서 accessToken 발급
    const kakao_api_url = `${process.env.KAKAO_AUTH_SERVER_URI}?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_url=${encodeURI(process.env.KAKAO_AUTH_REDIRECT_URI)}&code=${code}`;

    try {
      const response: AxiosResponse<string> = await axios.post(kakao_api_url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
