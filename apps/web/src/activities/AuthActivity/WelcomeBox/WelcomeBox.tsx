import { Box, Typography, styled } from '@mui/material';

const StyledBox = styled(Box)({
  height: '90%',
});

export const WelcomeBox = () => {
  return (
    <StyledBox>
      <Typography>먹깨비에 오신 것을 환영합니다!</Typography>
    </StyledBox>
  );
};
