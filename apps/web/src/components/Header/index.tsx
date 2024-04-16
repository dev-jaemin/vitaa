import { Box, Button, styled } from '@mui/material';
import { SpaceBetweenContainer } from '../Containers/ScreenContainer';
import { useSelectedDate } from '../../activities/MainActivity/_store/selectedDate';
import dayjs from 'dayjs';
import { ArrowDropDown } from '@mui/icons-material';
import { useFlow } from '../../layouts/stackflow';

const Header = ({ isCalendar = false }: { isCalendar?: boolean }) => {
  const selectedDate = useSelectedDate();
  const { push } = useFlow();

  const onClickCalendar = () => {
    push('CalendarModal', {});
  };

  return (
    <HeaderPaper>
      <SpaceBetweenContainer>
        <Circle style={{ backgroundImage: `url('https://picsum.photos/52/52')` }} />
        {isCalendar && (
          <Button endIcon={<ArrowDropDown />} color="secondary" onClick={onClickCalendar}>
            {dayjs(selectedDate).format('YYYY년 MM월 DD일')}
          </Button>
        )}
        <Circle />
      </SpaceBetweenContainer>
    </HeaderPaper>
  );
};

export default Header;

const HeaderPaper = styled(Box)({
  height: 64,
  padding: 16,
});

const Circle = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  width: 52,
  height: 52,
  backgroundColor: theme.colors.primary.main,
}));
