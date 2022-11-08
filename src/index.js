import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './GlobalStyles'
import { ScrollToTop } from './pages/home-page/ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <GlobalStyle />
    <ScrollToTop />
  </BrowserRouter>,
  document.getElementById('root')
);
