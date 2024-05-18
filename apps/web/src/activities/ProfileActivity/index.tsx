import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Box, Button, Typography, styled, useTheme } from '@mui/material';

import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import { useFlow } from '../../layouts/stackflow';
import GavelIcon from '@mui/icons-material/Gavel';
import DefaultAvatar from '/DefaultAvatar.png';
import { Logout, QuestionAnswer, Settings } from '@mui/icons-material';
import { useGetUserInfo } from '../../apis/auth/_hooks/me';
import { enqueueSnackbar } from 'notistack';

const ProfileActivity: ActivityComponentType = () => {
  const { push } = useFlow();
  const theme = useTheme();

  function handleLogin() {
    push('AuthActivity', {}, { animate: true });
  }

  function handleSettings() {
    push('MyInformationActivity', {}, { animate: true });
  }

  function handleRules() {
    push('RulesBottomSheet', {});
  }

  function handleQnA() {
    enqueueSnackbar('Coming Soon! 조금만 기다려 주세요 ㅠㅠ', { variant: 'info' });
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
              <Typography variant="h6" ml={2}>
                내 정보 변경
              </Typography>
            </NavButton>
            <NavButton variant="contained" onClick={handleQnA}>
              <QuestionAnswer />
              <Typography variant="h6" ml={2}>
                Q & A
              </Typography>
            </NavButton>
          </Box>
          <Box display={'flex'} px={4} gap={1}>
            <NavButton variant="contained" onClick={handleRules}>
              <GavelIcon />
              <Typography variant="h6" ml={2}>
                약관
              </Typography>
            </NavButton>
            <NavButton onClick={handleLogin} variant="contained">
              <Logout />
              <Typography variant="h6" ml={2}>
                로그아웃
              </Typography>
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
  borderRadius: 24,
  backgroundColor: 'whitesmoke',
  color: 'black',
  ':hover': {
    backgroundColor: 'lightgray',
  },
});
