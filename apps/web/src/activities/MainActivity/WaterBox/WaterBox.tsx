import { Box, Typography, styled } from '@mui/material';
import EmptyCup from '../../../assets/cup_empty.png';
import FullCup from '../../../assets/cup_full.png';
import AddCup from '../../../assets/cup_add.png';
import { FlexContainer } from '../../../components/Containers/ScreenContainer';
import { addCup, getCupCount } from './waterBoxUtils';
import { useSelectedDate } from '../../../recoil/selectedDate';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';

const TOTAL_WATER_CUPS = 7;
const WATER_ML = 200;

const SnackbarMessages = [
  '오늘 첫번째 컵을 마셨어요! 😊',
  '좋아요! 두번째 컵을 마셨어요! 🥤',
  '세번째 잔! 물을 더 마시면 좋아요! 💦',
  '한잔 더 마셨어요! 🫧',
  '다섯 번째 컵! 🥤',
  '얼마 안남았어요! 물을 더 마셔요! 💧',
  '마지막 컵! 건강한 하루 보내세요! 🎉',
];

export const WaterBox = () => {
  const today = useSelectedDate();
  const [currentWaterCups, setCurrentWaterCups] = useState(0);

  useEffect(() => {
    const initialCupCount = getCupCount(today);
    setCurrentWaterCups(initialCupCount);
  }, [today]);

  const handleClickCup = () => {
    if (currentWaterCups < TOTAL_WATER_CUPS) {
      addCup(today);
      const newCupCount = getCupCount(today);
      setCurrentWaterCups(newCupCount);
      enqueueSnackbar(SnackbarMessages[currentWaterCups], { variant: 'success' });
    }
  };

  return (
    <BoxContainer>
      <FlexContainer justifyContent={'space-between'} alignItems={'center'}>
        <FlexContainer alignItems={'center'} gap={1}>
          <Typography variant="subtitle2" textAlign={'left'} ml={2}>
            오늘의 물 섭취량
          </Typography>
          <Typography variant="h6" textAlign={'center'} fontWeight={'bold'}>
            {WATER_ML * currentWaterCups}ml {currentWaterCups === TOTAL_WATER_CUPS && ' 🎉'}
          </Typography>
        </FlexContainer>
        <Typography variant="caption" textAlign={'center'} mr={2}>
          {currentWaterCups} / {TOTAL_WATER_CUPS} 컵 {currentWaterCups === TOTAL_WATER_CUPS && ' ✅'}
        </Typography>
      </FlexContainer>
      <Typography variant="caption" textAlign={'center'} ml={2}>
        하루에 1L 도전!
      </Typography>
      <FlexContainer justifyContent={'space-between'} p={2}>
        {Array.from({ length: currentWaterCups }).map((_, idx) => (
          <CupImage key={idx} src={FullCup} alt="cup" />
        ))}
        {currentWaterCups !== TOTAL_WATER_CUPS && <CupButton src={AddCup} alt="cup" onClick={handleClickCup} />}
        {Array.from({ length: TOTAL_WATER_CUPS - currentWaterCups - 1 }).map((_, idx) => (
          <CupImage key={'empty' + idx} src={EmptyCup} alt="cup" />
        ))}
      </FlexContainer>
    </BoxContainer>
  );
};

const BoxContainer = styled(Box)(({ theme }) => ({
  borderRadius: 12,
  backgroundColor: theme.colors.secondary.lighter,
  width: '100%',
  padding: '16px 0',
}));

const CupImage = styled('img')({
  width: 48,
  height: 48,
});

const CupButton = styled('img')({
  width: 48,
  height: 48,
  '&:hover': {
    cursor: 'pointer',
    opacity: 0.7,
  },
});
