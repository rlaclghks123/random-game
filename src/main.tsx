import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle.tsx';
import Routers from './Routers.tsx';
// import initMocks from './mocks/index.ts';

// if (process.env.NODE_ENV === 'development') {
//   await initMocks();
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
);
