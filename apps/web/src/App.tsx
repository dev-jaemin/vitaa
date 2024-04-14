import './App.css';
import '@stackflow/plugin-basic-ui/index.css';
import { Stack } from './layouts/stackflow';
import { ThemeProvider } from '@repo/ui';

function App() {
  return (
    <>
      <ThemeProvider>
        <Stack />
      </ThemeProvider>
    </>
  );
}

export default App;
