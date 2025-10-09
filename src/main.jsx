import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './App.scss';
import App from './App.jsx';
import Testingpage from './pages/development/Testingpage.jsx';

const primaryTheme = {
  colors: {
    "primary": "#f97306",
    "backgroundLight": "#f8f7f5",
    "backgroundDark": "#1a1a1a",
  },
  fonts: {
    headingFont: "Playfair Display",
    secondaryFont: "Work Sans",
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/test",
    element: <Testingpage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={primaryTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
