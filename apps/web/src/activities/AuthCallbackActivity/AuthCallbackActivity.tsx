import { useEffect } from 'react';

import { type AuthResponse } from '@repo/ui';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

import { useFlow } from '../../layouts/stackflow';

export const AuthCallbackActivity = () => {
  const params = new URL(document.URL).searchParams;
  const code = params.get('code');
  const { push } = useFlow();

  async function postAuthKakaoCallback(code: string) {
    try {
      const authData = (await axios.post<AuthResponse>(`${import.meta.env.VITE_API_URL}/auth/kakao/callback`, { code }))
        .data;

      console.log(authData);
      if (authData) {
        Object.entries(authData).forEach(object => {
          localStorage.setItem(object[0], object[1]);
        });

        enqueueSnackbar('Welcome Back!', { variant: 'success' });
      }
    } catch (e) {
      window.alert('로그인 실패ㅠㅠㅠ');
      console.error(e);
    }
  }

  useEffect(() => {
    if (code) {
      postAuthKakaoCallback(code);
      push('RegisterActivity', {});
      // push('MainActivity', {});
    }
  }, []);

  return <div>카카오 로그인 중</div>;
};
