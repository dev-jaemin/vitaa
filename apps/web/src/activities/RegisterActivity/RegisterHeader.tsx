import { ChevronLeft } from '@mui/icons-material';
import { Box, IconButton, styled } from '@mui/material';

import { useRegisterStep } from '../../recoil/auth';

export const RegisterHeader = () => {
  const [registerStep, setRegisterStep] = useRegisterStep();

  const goBack = () => {
    setRegisterStep(registerStep - 1);
  };

  return (
    <>
      <BackHeader>
        {registerStep !== 1 && (
          <IconButtonWrapper onClick={goBack}>
            <ChevronLeft />
          </IconButtonWrapper>
        )}
      </BackHeader>
    </>
  );
};

const BackHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '70px',
});

const IconButtonWrapper = styled(IconButton)({
  backgroundColor: 'whitesmoke',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  margin: 10,
});
