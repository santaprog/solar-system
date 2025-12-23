import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import reportWebVitals from './reportWebVitals';
import { routerComponent } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={routerComponent} />
  </React.StrictMode>
);

reportWebVitals();
