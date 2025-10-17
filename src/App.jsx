import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const AppContainer = styled.section`
    position: relative;
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    color: ${({theme}) => theme.colors.backgroundLight};
    padding-bottom: 200px;
    
    min-height: 100vh;
    
    .main_content {
        margin: 0 auto;
        max-width: 1440px;
    }
`;

function App() {
    return (
        <AppContainer>
            <Navbar />
            <main className="main_content">
                <Outlet/>
            </main>
            <Footer />
        </AppContainer>
    );
}

export default App;
