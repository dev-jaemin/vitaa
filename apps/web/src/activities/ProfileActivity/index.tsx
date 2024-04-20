import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Button, Typography } from '@mui/material';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import { useFlow } from '../../layouts/stackflow';

const ProfileActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  function handleLogin() {
    push('AuthActivity', {}, { animate: true });
  }

  return (
    <AppScreen>
      <ScreenContainer>
        <Typography variant="h1">Profile Activity</Typography>
        <Button onClick={handleLogin}>카카오 로그인</Button>
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default ProfileActivity;
