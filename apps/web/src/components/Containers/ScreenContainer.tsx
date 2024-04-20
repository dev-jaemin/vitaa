import { Box, Paper, styled } from '@mui/material';

export const ScreenContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  position: 'relative',
  overflow: 'auto',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
}));

export const SpaceBetweenContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
