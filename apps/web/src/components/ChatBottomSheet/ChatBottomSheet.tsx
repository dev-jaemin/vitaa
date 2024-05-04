import { Box, Button, Input, Typography, styled } from '@mui/material';
import { WEBVIEW_WIDTH } from '@repo/ui';
import Sheet from 'react-modal-sheet';
import { ChatItem } from '../ChatItem';
import { ChatData } from '../../activities/MainActivity/_data/chat';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const WebViewSheet = styled(Sheet)`
  .react-modal-sheet-container {
    width: ${WEBVIEW_WIDTH}px !important;
    height: 80vh !important;
    left: calc(50% - ${WEBVIEW_WIDTH / 2}px) !important;
  }
`;

interface ChatBottomSheetProps {
  isBottomSheetOpen: boolean;
  onClose: () => void;
  messages: ChatData[];
}
export function ChatBottomSheet({ isBottomSheetOpen, onClose, messages }: ChatBottomSheetProps) {
  return (
    <WebViewSheet isOpen={isBottomSheetOpen} onClose={onClose}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <Box display="flex" alignItems="center" gap={1} p={2} borderBottom="1px solid #ddd">
            <Circle style={{ backgroundImage: `url('https://picsum.photos/52/52')` }} />
            <Typography variant="h4">먹깨비</Typography>
          </Box>
          <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
            <Box margin={1}>
              {messages.map((message, index) => (
                <ChatItem key={index} me={message.sender === 'me'} message={message.message} />
              ))}
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
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </WebViewSheet>
  );
}

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
