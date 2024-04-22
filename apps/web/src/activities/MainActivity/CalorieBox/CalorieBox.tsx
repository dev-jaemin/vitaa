import { LocalFireDepartment } from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';

const tempCurrentCalories = 75;
const tempMaxCalories = 200;

const CalorieBox = () => {
  const currentCalories = tempCurrentCalories;
  const maxCalories = tempMaxCalories;
  const progressValue = (currentCalories / maxCalories) * 100;

  return (
    <BoxContainer textAlign={'center'}>
      <Box>
        <Gauge width={300} height={300} value={progressValue} endAngle={110} startAngle={-110} text={''} />
      </Box>
      <Box mb={8} mt={-20}>
        <LocalFireDepartment color="primary" fontSize="large" />
        <Typography variant="subtitle1"> 칼로리 소모량</Typography>
        <Typography variant="body2">{maxCalories} 중</Typography>
        <Typography variant="h1" display="inline">
          {currentCalories}
        </Typography>
        <Typography variant="body2" display="inline">
          &nbsp;kcal
        </Typography>
      </Box>
    </BoxContainer>
  );
};

export default CalorieBox;

const BoxContainer = styled(Box)(({ theme }) => ({
  borderRadius: 24,
  backgroundColor: theme.colors.primary.lighter,
  marginTop: 16,
  padding: '0px 16px',
  width: '80%',
}));
