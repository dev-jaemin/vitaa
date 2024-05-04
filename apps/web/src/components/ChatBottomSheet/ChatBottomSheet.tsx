import { Box, styled } from '@mui/material';
import { WEBVIEW_WIDTH } from '@repo/ui';
import Sheet from 'react-modal-sheet';
import { ChatItem } from '../ChatItem';
import { ChatData } from '../../activities/MainActivity/_data/chat';

const WebViewSheet = styled(Sheet)`
  .react-modal-sheet-container {
    width: ${WEBVIEW_WIDTH}px !important;
    height: 600px !important;
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
          <Box margin={1}>
            {messages.map((message, index) => (
              <ChatItem key={index} me={message.sender === 'me'} message={message.message} />
            ))}
          </Box>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </WebViewSheet>
  );
}
