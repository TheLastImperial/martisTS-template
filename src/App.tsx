import './App.css'
import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './auth/pages/Login';

function App() {
  const themes = createTheme({});
  return (
    <>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={themes}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={ <Login/> }/>
            </Routes>
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </>
  )
}

export default App
