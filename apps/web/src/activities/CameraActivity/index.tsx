import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import Camera from './Camera/Camera';

const CameraActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <ScreenContainer>
        <Camera />
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default CameraActivity;
