import { BottomSheet } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType, useActivity } from '@stackflow/react';
import { Box, Button, Input, Typography, styled } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ChatItem } from '../../components/ChatItem';
import { MOCK_CHAT_DATA } from '../MainActivity/_data/chat';

const ChatBottomSheet: ActivityComponentType = () => {
  const messages = MOCK_CHAT_DATA;
  const activity = useActivity();
  const currentMessage = activity.params.message;

  return (
    <BottomSheet>
      <Box display="flex" alignItems="center" gap={1} p={2} borderBottom="1px solid #ddd">
        <Circle style={{ backgroundImage: `url('https://picsum.photos/52/52')` }} />
        <Typography variant="h4">먹깨비</Typography>
      </Box>
      <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <Box margin={1}>
          {messages.map((message, index) => (
            <ChatItem key={index} me={message.sender === 'me'} message={message.message} />
          ))}
          {currentMessage && <ChatItem me message={currentMessage} />}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          py={1}
          borderTop="1px solid #eeeeee"
        >
          <Box>
            <AttachFileIcon />
          </Box>
          <Input placeholder="메시지를 입력하세요" sx={{ width: '70%' }} />
          <Button variant="contained" color="primary">
            전송
          </Button>
        </Box>
      </Box>
    </BottomSheet>
  );
};

export default ChatBottomSheet;

const Circle = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  width: 36,
  height: 36,
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
