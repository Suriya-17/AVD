import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.scss';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/home",
    element: <App/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
