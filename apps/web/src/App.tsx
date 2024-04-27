import './App.css';
import '@stackflow/plugin-basic-ui/index.css';
import { Stack } from './layouts/stackflow';
import { StackLayout, ThemeProvider } from '@repo/ui';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';
import { Check, Error, Info, Warning } from '@mui/icons-material';
import SnackbarTheme from './components/Snackbar/SnackbarTheme';

function App() {
  return (
    <>
      <ThemeProvider>
        <RecoilRoot>
          <SnackbarProvider
            iconVariant={{
              success: <Check color="success" />,
              error: <Error color="error" />,
              warning: <Warning color="warning" />,
              info: <Info color="info" />,
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
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
