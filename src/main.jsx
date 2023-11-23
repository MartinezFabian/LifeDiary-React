import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import './styles.css';
import { LifeDiaryApp } from './LifeDiaryApp';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <LifeDiaryApp></LifeDiaryApp>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
