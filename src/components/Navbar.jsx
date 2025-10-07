import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png';

const NavbarContainer = styled.div`
    font-family: "Ariel";

    .logo_container {
        display: flex; 
        .main_logo {
            height: 50px; 
        }
    }

`

function Navbar() {
    return (
        <NavbarContainer className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='logo_container'>
                <img src={logo} className='main_logo' />
                <h1 className='logo'>Navbar</h1>
            </div>
        </NavbarContainer>
    )
}

export default Navbar;