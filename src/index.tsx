import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './route/routing';
import { ListInformation } from './gobalComponents/listContent'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ListInformation>
        <RouterConfig />
      </ListInformation>
    </BrowserRouter>
  </React.StrictMode>,
);
