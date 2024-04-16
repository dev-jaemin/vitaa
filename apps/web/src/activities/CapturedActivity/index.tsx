import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import { useCapturedImage } from '../CameraActivity/_store/capturedImage';

const CapturedActivity: ActivityComponentType = () => {
  const capturedImage = useCapturedImage();

  return (
    <AppScreen>
      <ScreenContainer>
        카메라 촬여ㅛㅇ 뒤 화면~
        {capturedImage && <img src={capturedImage} alt="captured" />}
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default CapturedActivity;
