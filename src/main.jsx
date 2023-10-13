import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';
import { LifeDiaryApp } from './LifeDiaryApp';
import { AppTheme } from './theme/AppTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <LifeDiaryApp></LifeDiaryApp>
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>
);
