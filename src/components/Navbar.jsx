import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png';
import { data, Link } from 'react-router-dom';

const NavbarContainer = styled.div`
    font-family: "Playfair Display";
    color: ${props => props.theme.colors.primary}; 

    .logo_container {
        display: flex; 
        .main_logo {
            height: 50px; 
        }
    }

`

function Navbar() {
    return (
        <NavbarContainer data="blue">
            <div className='logo_container'>
                <img src={logo} className='main_logo' />
                <h1 className='logo'>Arjun Digital Solutions</h1>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Services</Link>
                    </li>
                    <li>
                        <Link>Portfolio</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </NavbarContainer>
    )
}

export default Navbar;