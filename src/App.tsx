import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './auth/pages/Login';
import ThemeCustomization from './themes';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeCustomization>
          <Routes>
            <Route path="/" element={ <Login/> }/>
          </Routes>
        </ThemeCustomization>
      </BrowserRouter>
    </>
  )
}

export default App
