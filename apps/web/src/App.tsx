import './App.css';
import '@stackflow/plugin-basic-ui/index.css';
import { Stack } from './layouts/stackflow';
import { StackLayout, ThemeProvider } from '@repo/ui';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';
import { Check, Error, Info, Warning } from '@mui/icons-material';
import SnackbarTheme from './components/Snackbar/SnackbarTheme';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  return (
    <>
      <ThemeProvider>
        <RecoilRoot>
          <QueryClientProvider client={new QueryClient()}>
            <SnackbarProvider
              iconVariant={{
                success: <Check color="success" sx={{ mr: 1 }} />,
                error: <Error color="error" sx={{ mr: 1 }} />,
                warning: <Warning color="warning" sx={{ mr: 1 }} />,
                info: <Info color="info" sx={{ mr: 1 }} />,
              }}
              anchorOrigin={{
                vertical: 'bottom',
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
