import './App.css';
import '@stackflow/plugin-basic-ui/index.css';
import { Stack } from './layouts/stackflow';
import { StackLayout, ThemeProvider } from '@repo/ui';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <ThemeProvider>
        <RecoilRoot>
          <StackLayout>
            <Stack />
          </StackLayout>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
