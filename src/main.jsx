import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureAppStore from 'reduxes/store/index.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './assets/styles/index.scss';

const store = configureAppStore();
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
