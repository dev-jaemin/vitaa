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
        borderRadius="10px"
        padding="10px"
        margin="10px"
        maxWidth="70%"
      >
        {message}
      </Box>
    </Box>
  );
}
