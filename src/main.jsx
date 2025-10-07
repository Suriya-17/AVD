import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.scss';
import App from './App.jsx';

const primaryTheme = {
  bgColor: "#000",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <App />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={primaryTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
