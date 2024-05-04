import { styled } from '@mui/material';
import { WEBVIEW_WIDTH } from '@repo/ui';
import Sheet from 'react-modal-sheet';

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
}
export function ChatBottomSheet({ isBottomSheetOpen, onClose }: ChatBottomSheetProps) {
  return (
    <WebViewSheet isOpen={isBottomSheetOpen} onClose={onClose}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>하하</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </WebViewSheet>
  );
}
