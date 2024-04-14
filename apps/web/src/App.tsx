import './App.css';
import '@stackflow/plugin-basic-ui/index.css';
import { Stack } from './layouts/stackflow';
import { StackLayout, ThemeProvider } from '@repo/ui';

function App() {
  return (
    <>
      <ThemeProvider>
        <StackLayout>
          <Stack />
        </StackLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
