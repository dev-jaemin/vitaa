import { Box, Typography } from '@mui/material';
import { getTimeIntervalOfDay } from '../../../utils/date/timeOfDay';

const currentTime = new Date();

const WelcomeBox = () => {
  const text = '좋은 ' + getTimeIntervalOfDay(currentTime) + ', ' + '사용자님!';
  return (
    <Box textAlign={'center'}>
      <Typography variant="h2">{text}</Typography>
    </Box>
  );
};

export default WelcomeBox;
