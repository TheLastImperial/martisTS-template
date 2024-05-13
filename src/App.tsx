import { BrowserRouter } from 'react-router-dom';
import { PaletteMode } from '@mui/material';

import ThemeCustomization from './themes';
import { RoutesApp } from './routes/RoutesApp';
import { useUIStore } from './ui/hooks';

function App() {
  const { mode } = useUIStore();
  return (
    <>
      <ThemeCustomization mode={ mode as PaletteMode }>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </ThemeCustomization>
    </>
  )
}

export default App
