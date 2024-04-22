import { Box, Typography } from '@mui/material';
import { getTimeIntervalOfDay } from '../../../date/timeOfDay';

const currentTime = new Date();

const tempYesterdayCalory = 1000;

const WelcomeBox = () => {
  const text = '좋은 ' + getTimeIntervalOfDay(currentTime);
  return (
    <Box textAlign={'center'}>
      <Typography variant="h2">{text}</Typography>
      <Typography variant="body2" mt={2}>
        어제보다 {tempYesterdayCalory} 더 소화했어요
      </Typography>
    </Box>
  );
};

export default WelcomeBox;
