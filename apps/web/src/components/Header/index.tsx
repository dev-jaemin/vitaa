import { Badge, Box, Button, styled } from '@mui/material';
import { SpaceBetweenContainer } from '../Containers/ScreenContainer';
import { useSelectedDate } from '../../recoil/selectedDate';
import dayjs from 'dayjs';
import { ArrowDropDown, Chat } from '@mui/icons-material';
import { useFlow } from '../../layouts/stackflow';
import { useState } from 'react';

import { ChatBottomSheet } from '../ChatBottomSheet';

const Header = ({ isCalendar = false }: { isCalendar?: boolean }) => {
  const selectedDate = useSelectedDate();
  const { push } = useFlow();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const onClickCalendar = () => {
    push('CalendarModal', {});
  };

  const handleClickChat = () => {
    setIsBottomSheetOpen(true);
  };

  const TEMP_IS_NEW_CHAT = true;

  return (
    <HeaderPaper>
      <SpaceBetweenContainer>
        <Circle style={{ backgroundImage: `url('https://picsum.photos/52/52')` }} />
        {isCalendar && (
          <Button endIcon={<ArrowDropDown />} color="secondary" onClick={onClickCalendar}>
            {dayjs(selectedDate).format('YYYY년 MM월 DD일')}
          </Button>
        )}
        <Circle>
          <Badge color="error" variant="dot" invisible={!TEMP_IS_NEW_CHAT}>
            <Chat onClick={handleClickChat} />
          </Badge>
        </Circle>
      </SpaceBetweenContainer>
      <ChatBottomSheet isBottomSheetOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)} />
    </HeaderPaper>
  );
};

export default Header;

const HeaderPaper = styled(Box)({
  height: 64,
  padding: '16px 16px 0 16px',
});

const Circle = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  width: 52,
  height: 52,
  backgroundColor: theme.colors.primary.main,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colors.primary.dark,
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));
