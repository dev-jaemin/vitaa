import { FoodBank, Logout, Settings } from '@mui/icons-material';
import GavelIcon from '@mui/icons-material/Gavel';
import { Box, Button, Typography, styled, useTheme } from '@mui/material';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import type { ActivityComponentType } from '@stackflow/react';

import { useGetUserInfo } from '../../apis/auth/_hooks/me';
import { BottomNavigation } from '../../components/BottomNavigation';
import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import { useFlow } from '../../layouts/stackflow';

import DefaultAvatar from '/DefaultAvatar.png';

import { useAuthUser } from '../../providers';
import { delete_cookie } from '../../utils/storage/cookie';

const ProfileActivity: ActivityComponentType = () => {
  const { push } = useFlow();
  const theme = useTheme();
  const { setUser } = useAuthUser();

  function handleLogout() {
    delete_cookie('accessToken');
    setUser?.(null);
    push('AuthActivity', {});
  }

  function handleSettings() {
    push('MyInformationActivity', {}, { animate: true });
  }

  function handleRules() {
    push('RulesBottomSheet', {});
  }

  function handleNutrient() {
    push('PersonalNutrientBottomSheet', {});
  }

  const { data } = useGetUserInfo();
  return (
    <AppScreen>
      <ScreenContainer style={{ padding: 0, height: '100%' }}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection={'column'}
          alignItems="center"
          width="100%"
          py={4}
          sx={{ backgroundColor: theme.colors.primary.lighter }}
        >
          <img src={DefaultAvatar} alt="avatar" style={{ width: 100, height: 100, borderRadius: '50%' }} />
          <Typography variant="h4" mt={2}>
            {data?.username}
          </Typography>
          <Typography>
            {data?.height}cm / {data?.weight}kg / {data?.age}살
          </Typography>
        </Box>
        <Box mt={4} display={'flex'} width={'100%'} flexDirection={'column'} gap={2}>
          <Box display={'flex'} px={4} gap={1}>
            <NavButton variant="contained" onClick={handleSettings}>
              <Settings />
              <Typography variant="h6">내 정보 변경</Typography>
            </NavButton>
            <NavButton variant="contained" onClick={handleNutrient}>
              <FoodBank />
              <Typography variant="h6">추천 영양분</Typography>
            </NavButton>
          </Box>
          <Box display={'flex'} px={4} gap={1}>
            <NavButton variant="contained" onClick={handleRules}>
              <GavelIcon />
              <Typography variant="h6">약관</Typography>
            </NavButton>
            <NavButton onClick={handleLogout} variant="contained">
              <Logout />
              <Typography variant="h6">로그아웃</Typography>
            </NavButton>
          </Box>
        </Box>
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default ProfileActivity;

const NavButton = styled(Button)({
  width: '50%',
  height: '200px',
  display: 'block',
  borderRadius: 24,
  backgroundColor: 'whitesmoke',
  color: 'black',
  ':hover': {
    backgroundColor: 'lightgray',
  },
});
