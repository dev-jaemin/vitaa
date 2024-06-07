import { Box, Typography, styled } from '@mui/material';

import VitaBot from '/VITA.png';

const StyledBox = styled(Box)({
  marginTop: '10%',
});

export const WelcomeBox = () => {
  return (
    <StyledBox>
      <img src={VitaBot} width={240} alt="카카오 로그인" />
      <Typography variant="h4" mt={4} textAlign={'center'}>
        비타에 오신 것을 환영합니다!
      </Typography>
      <Typography variant="body1" my={2} textAlign={'center'}>
        이용을 위해 로그인 해주세요!
      </Typography>
    </StyledBox>
  );
};
