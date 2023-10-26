import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';
import { LifeDiaryApp } from './LifeDiaryApp';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LifeDiaryApp></LifeDiaryApp>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
