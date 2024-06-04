import { Box, Typography } from '@mui/material';

interface ChatItemProps {
  me: boolean;
  message: string;
  createdAt: string;
  isSending?: boolean;
}

const today = new Date();

export function ChatItem({ me, message, createdAt, isSending }: ChatItemProps) {
  const isToday = today.toDateString() === new Date(createdAt).toDateString();
  const time = new Date(createdAt).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // 5월 6일 오후 3:00
  const date = new Date(createdAt).toLocaleString('ko-KR', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Box display="flex" margin={1} justifyContent={me ? 'right' : 'left'} mb={1}>
      <Box maxWidth="70%">
        <Box
          bgcolor={me ? 'primary.main' : 'secondary.main'}
          color={me ? 'primary.contrastText' : 'secondary.contrastText'}
          borderRadius={1}
          padding={1}
        >
          {message}
        </Box>
        <Box
          display="flex"
          justifyContent={me ? 'right' : 'left'}
          ml={me ? '0' : '4px'}
          mr={me ? '4px' : '0'}
          mt={'2px'}
        >
          {!isSending ? (
            <Typography variant="caption" fontSize={10}>
              {isToday ? time : date}
            </Typography>
          ) : (
            <Typography variant="caption" fontSize={10}>
              전송중..
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
