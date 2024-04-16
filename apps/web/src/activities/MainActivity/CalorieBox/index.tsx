import { Box, CircularProgress, styled } from '@mui/material';

const CalorieBox = () => {
  return (
    <BoxContainer textAlign={'center'}>
      <CircularProgressContainer variant="determinate" value={75} size={200} />
    </BoxContainer>
  );
};

export default CalorieBox;

const BoxContainer = styled(Box)(({ theme }) => ({
  borderRadius: 24,
  backgroundColor: theme.colors.primary.lighter,
  padding: 16,
  marginTop: 16,
  display: 'flex',
  width: 'calc(100%-32px)',
}));

const CircularProgressContainer = styled(CircularProgress)({
  // clipPath: 'inset(0 0 0 50%)',
});
