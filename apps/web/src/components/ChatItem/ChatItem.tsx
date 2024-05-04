import { Box } from '@mui/material';

interface ChatItemProps {
  me: boolean;
  message: string;
}
export function ChatItem({ me, message }: ChatItemProps) {
  return (
    <Box display="flex" justifyContent={me ? 'right' : 'left'}>
      <Box
        bgcolor={me ? 'primary.main' : 'secondary.main'}
        color={me ? 'primary.contrastText' : 'secondary.contrastText'}
        borderRadius={1}
        padding={1}
        margin={1}
        maxWidth="70%"
      >
        {message}
      </Box>
    </Box>
  );
}
