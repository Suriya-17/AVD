import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png';
import { data, Link } from 'react-router-dom';

const NavbarContainer = styled.div`
    font-family: "Playfair Display";
    color: ${props => props.theme.colors.backgroundLight}; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px ${props => props.theme.colors.primary} ;
    background-color: ${props => props.theme.colors.backgroundDark} ;
    padding: 10px;

    .logo_container {
        display: flex;
        align-items : center ;
        .main_logo {
            height: 50px; 
        }
        .logo_text{
            font-size: 1.5rem;
            vertical-align: center;
            font-weight: bold; 
        }
    }
    .nav_links{
        padding-top: 10px;
        margin-right: 90px;
        ul{
            display: flex;
            list-style-type: none;
            gap: 35px;
            li{
                font-size: large;
                a{
                    text-decoration: none;
                    color:  ${props => props.theme.colors.backgroundLight}
                }
            }
        }
    }
    .nav_btn{
        
        button{
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.backgroundLight};
            font-weight: bold;
            padding: 10px 30px 10px 30px;
            border: none;
            border-radius: 10px;
            margin-right: 20px;
        }
    }

`

function Navbar() {
    return (
        <NavbarContainer data="blue">
            <div className='logo_container'>
                <img src={logo} className='main_logo' />
                <h1 className='logo_text'>Arjun Digital Solutions</h1>
            </div>
            <div className='nav_links'>
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
            <div className='nav_btn'>
                <button>Get a Quote</button>
            </div>
        </NavbarContainer>
    )
}

export default Navbar;