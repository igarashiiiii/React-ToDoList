import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from './route/routing';
import { ListsProvider } from "./gobalComponents/globalComponents"

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ListsProvider>
        <RouterConfig />
      </ListsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
