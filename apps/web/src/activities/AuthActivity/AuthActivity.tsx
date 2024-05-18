import { Box, Button } from '@mui/material';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { type ActivityComponentType } from '@stackflow/react';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import KakaoLogo from '/src/assets/kakao_login.webp';
import { WelcomeBox } from './WelcomeBox';
import { useEffect } from 'react';
import { useAuthUser } from '../../providers';
import { useGetUserInfo } from '../../apis/auth/_hooks/me';

export const AuthActivity: ActivityComponentType = () => {
  const { setUser } = useAuthUser();

  async function handleLogin() {
    window.Kakao.Auth.authorize({ redirectUri: `${import.meta.env.VITE_API_URL}/auth/kakao` });

    const user = useGetUserInfo();
    console.log('user', user);
  }

  useEffect(() => {
    if (typeof import.meta.env.VITE_KAKAO_SDK_KEY === 'string' && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_SDK_KEY);
    }
  }, []);

  return (
    <AppScreen>
      <ScreenContainer style={{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
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
