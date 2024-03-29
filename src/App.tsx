import { BrowserRouter } from 'react-router-dom';
import ThemeCustomization from './themes';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { RoutesApp } from './routes/RoutesApp';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeCustomization>
            <RoutesApp/>
          </ThemeCustomization>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
