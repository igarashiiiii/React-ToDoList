import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { RouterConfig } from '../route/Route';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>index</div>
      {/* <RouterConfig /> */}
    </BrowserRouter>
  </React.StrictMode>,
);
