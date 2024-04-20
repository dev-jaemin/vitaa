import { Block } from '@mui/icons-material';
import { Button } from '@mui/material';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { type ActivityComponentType } from '@stackflow/react';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';

export const AuthActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: '카카오 로그인' }}>
      <ScreenContainer>
        <Block>
          카카오 로그인 <Button>카카오</Button>
        </Block>
      </ScreenContainer>
    </AppScreen>
  );
};
