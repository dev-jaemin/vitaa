import { Box, Typography } from '@mui/material';
import { getTimeIntervalOfDay } from '../../../utils/date/timeOfDay';
import { useGetUserInfo } from '../../../apis/auth/_hooks/me';

const currentTime = new Date();

const WelcomeBox = () => {
  const { data } = useGetUserInfo();

  const text = '좋은 ' + getTimeIntervalOfDay(currentTime);
  return (
    <Box textAlign={'center'}>
      <Typography variant="h3">{text}</Typography>
      <Typography variant="h2">{data?.username + '님!'}</Typography>
    </Box>
  );
};

export default WelcomeBox;
