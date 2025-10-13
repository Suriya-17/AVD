import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './App.scss';
import App from './App.jsx';
import Testingpage from './pages/development/Testingpage.jsx';
import Home from './pages/Home.jsx'
import Notfoundpage from './pages/Notfoundpage.jsx';

const primaryTheme = {
  colors: {
    primary: "#f97306",
    primaryDark: "#a64b00",
    backgroundLight: "#f8f7f5",
    backgroundDark: "#141515",
    backgroundGrey: "#1b1a1a",
  },
  fonts: {
    headingFont: "Playfair Display",
    secondaryFont: "Work Sans",
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/test",
    element: <Testingpage />
  },
  {
    path:"*",
    element:<Notfoundpage/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={primaryTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
