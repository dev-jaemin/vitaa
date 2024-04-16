import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Typography } from '@mui/material';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';

const ProfileActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <ScreenContainer>
        <Typography variant="h1">Profile Activity</Typography>
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default ProfileActivity;
