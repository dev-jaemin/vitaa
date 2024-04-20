import { Box, Button } from '@mui/material';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { type ActivityComponentType } from '@stackflow/react';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import KakaoLogo from '/src/assets/kakao_login.webp';
import { WelcomeBox } from './WelcomeBox';

export const AuthActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: '카카오 로그인' }}>
      <ScreenContainer>
        <WelcomeBox />
        <Box>
          <Button>
            <img src={KakaoLogo} alt="카카오 로그인" />
          </Button>
        </Box>
      </ScreenContainer>
    </AppScreen>
  );
};
