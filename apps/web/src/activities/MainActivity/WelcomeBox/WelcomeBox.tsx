import { Box, Typography } from '@mui/material';
import { getTimeIntervalOfDay } from '../../../date/timeOfDay';

const currentTime = new Date();

const WelcomeBox = () => {
  const text = '좋은 ' + getTimeIntervalOfDay(currentTime);
  return (
    <Box textAlign={'center'}>
      <Typography variant="h2">{text}</Typography>
    </Box>
  );
};

export default WelcomeBox;
