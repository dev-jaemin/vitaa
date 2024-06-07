import { Box, Button, Typography, styled } from '@mui/material';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import SadVita from '/SAD_VITA.png';
import { useFlow } from '../../layouts/stackflow';

const NotFoundActivity = () => {
  const { replace } = useFlow();

  const handleGoHome = () => {
    replace('MainActivity', {});
  };

  return (
    <AppScreen>
      <CenterContainer>
        <Typography variant="h3">앗, 잘못 들어오신 것 같아요..!</Typography>
        <Image src={SadVita} alt="Sad Vita" />
        <Button variant="contained" onClick={handleGoHome}>
          홈으로 돌아가기
        </Button>
      </CenterContainer>
    </AppScreen>
  );
};

export default NotFoundActivity;

const Image = styled('img')({
  width: '60%',
  height: 'auto',
});

const CenterContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  gap: 20,
});
