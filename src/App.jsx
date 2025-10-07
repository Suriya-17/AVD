import React from "react"
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";



const AppWrapper = styled.div`
  .something{
    background-color: ${props => props.bgColor};
    height: 100vh;
  }
  
`

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <h1 className="something">somthing</h1>
    </AppWrapper>
  )
}

export default App;
