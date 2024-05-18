import type { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BottomNavigation } from '../../components/BottomNavigation';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from '@mui/material';

import { ScreenContainer } from '../../components/Containers/ScreenContainer';
import { useFlow } from '../../layouts/stackflow';
import Login from '@mui/icons-material/Login';
import GavelIcon from '@mui/icons-material/Gavel';
import DefaultAvatar from '/DefaultAvatar.png';

const ProfileActivity: ActivityComponentType = () => {
  const { push } = useFlow();
  const theme = useTheme();

  function handleLogin() {
    push('AuthActivity', {}, { animate: true });
  }

  return (
    <AppScreen>
      <ScreenContainer style={{ padding: 0 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50%"
          width="100%"
          sx={{ backgroundColor: theme.colors.primary.lighter }}
        >
          <img src={DefaultAvatar} alt="avatar" style={{ width: 100, height: 100, borderRadius: '50%' }} />
        </Box>
        <Box px={2} width="100%">
          <Box display="flex" flexDirection="column" gap={1} m={1} p={2} border="1px solid #ddd">
            <Typography variant="h6">내 정보 수정</Typography>
            <FormControl style={{ gap: 10 }}>
              <RadioGroup
                aria-labelledby="성별 수정"
                defaultValue="female"
                name="gender-group"
                sx={{ flexDirection: 'row' }}
              >
                <FormControlLabel value="female" control={<Radio />} label="여자" />
                <FormControlLabel value="male" control={<Radio />} label="남자" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
              <Input placeholder="생년월일" type="date" />
              <Input placeholder="체중" type="number" />
              <Input placeholder="키" type="number" />
              <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>
                수정하기
              </Button>
            </FormControl>
          </Box>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary="약관" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={handleLogin}>
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                <ListItemText primary="카카오 로그아웃" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </ScreenContainer>
      <BottomNavigation />
    </AppScreen>
  );
};

export default ProfileActivity;
