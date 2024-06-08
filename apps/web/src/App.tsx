import { Check, Error, Info, Warning } from '@mui/icons-material';
import { StackLayout, ThemeProvider } from '@repo/ui';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { RecoilRoot } from 'recoil';

import SnackbarTheme from './components/Snackbar/SnackbarTheme';
import { COMMON_MESSAGE } from './constants/snackbarMessage';
import { Stack } from './layouts/stackflow';

import './App.css';
import '@stackflow/plugin-basic-ui/index.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <ThemeProvider>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider
              iconVariant={{
                success: <Check color="success" sx={{ mr: 1 }} />,
                error: <Error color="error" sx={{ mr: 1 }} />,
                warning: <Warning color="warning" sx={{ mr: 1 }} />,
                info: <Info color="info" sx={{ mr: 1 }} />,
              }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              Components={{
                success: SnackbarTheme,
                error: SnackbarTheme,
                warning: SnackbarTheme,
                info: SnackbarTheme,
              }}
            >
              <StackLayout>
                <Stack />
              </StackLayout>
            </SnackbarProvider>
          </QueryClientProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
