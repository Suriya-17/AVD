import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import primaryTheme from "./Theme.jsx";
import App from "./App.jsx";
import Testingpage from "./pages/development/Testingpage.jsx";
import Home from "./pages/Home.jsx";
import Notfoundpage from "./pages/Notfoundpage.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SEO from "./pages/services/SEO.jsx";
import SMM from "./pages/services/SMM.jsx";
import PPC from "./pages/services/PPC.jsx";
import ContentMarketing from "./pages/services/ContentMarketing.jsx";
import WebDesign from "./pages/services/WebDesign.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "seo",
                element: <SEO />,
            },
            {
                path: "smm",
                element: <SMM />,
            },
            {
                path: "ppc",
                element: <PPC />,
            },
            {
                path: "webdesign",
                element: <WebDesign />,
            },
            {
                path: "contentmarketing",
                element: <ContentMarketing />,
            },
            {
                path: "portfolio",
                element: <Portfolio />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "/test",
        element: <Testingpage />,
    },
    {
        path: "*",
        element: <Notfoundpage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={primaryTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
