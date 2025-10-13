import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'


const HomeContainer = styled.section`
  background-color: ${props => props.theme.colors.backgroundGrey};
  min-height: 100vh;
`

function Home() {
  return (
    <HomeContainer>
      <Navbar/>
      
    </HomeContainer>
  )
}

export default Home