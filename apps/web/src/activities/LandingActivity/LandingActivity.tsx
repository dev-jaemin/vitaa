import { AppScreen } from '@stackflow/plugin-basic-ui';
import { type ActivityComponentType } from '@stackflow/react';

import { ScreenContainer } from '../../components/Containers/ScreenContainer';

export const LandingActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: '카카오 로그인' }}>
      <ScreenContainer>
        
      </ScreenContainer>
    </AppScreen>
  );
};
