import { Box, Typography, styled } from '@mui/material';

const MealImageBox = ({ src }: { src: string }) => {
  return (
    <BoxContainer>
      <Typography variant="h4" textAlign={'center'} mb={1}>
        내가 기록한 이미지
      </Typography>
      <MealImage src={src} />
    </BoxContainer>
  );
};

export default MealImageBox;

const MealImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: 24,
});

const BoxContainer = styled(Box)(({ theme }) => ({
  borderRadius: 24,
  backgroundColor: theme.colors.secondary.lighter,
  width: '90%',
  padding: 16,
}));
