import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

