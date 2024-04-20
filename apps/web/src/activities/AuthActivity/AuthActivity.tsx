import { Box, Button } from '@mui/material';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { type ActivityComponentType } from '@stackflow/react';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import KakaoLogo from '/src/assets/kakao_login.webp';
import { WelcomeBox } from './WelcomeBox';
import { useEffect } from 'react';

export const AuthActivity: ActivityComponentType = () => {
  function handleLogin() {
    window.Kakao.Auth.authorize({ redirectUri: 'http://localhost:5173/auth/callback' });
  }

  useEffect(() => {
    if (typeof import.meta.env.VITE_KAKAO_SDK_KEY === 'string' && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_SDK_KEY);
    }
  }, []);

  return (
    <AppScreen appBar={{ title: '카카오 로그인' }}>
      <ScreenContainer>
        <WelcomeBox />
        <Box>
          <Button onClick={handleLogin}>
            <img src={KakaoLogo} alt="카카오 로그인" />
          </Button>
        </Box>
      </ScreenContainer>
    </AppScreen>
  );
};
