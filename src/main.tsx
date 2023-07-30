import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle.tsx';
import Routers from './Routers.tsx';
// import { worker } from './mocks/browser.ts';

// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
);
