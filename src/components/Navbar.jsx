import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    color: ${(props) => props.theme.colors.backgroundLight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px ${(props) => props.theme.colors.primaryDark};
    background-color: ${(props) => props.theme.colors.backgroundDark};
    padding: 0 20px;

    height: 70px;

    .logo_container {
        display: flex;
        align-items: center;

        .main_logo {
            height: 40px;
            margin-right: 10px;
        }

        .logo_text {
            font-size: 1.5rem;
            font-weight: bold;
            color: ${(props) => props.theme.colors.backgroundLight};
            margin: 0;
        }
    }

    .nav_links {
        margin-right: 90px;
        padding-top: 0;

        ul {
            display: flex;
            list-style-type: none;
            gap: 35px;
            margin: 0;
            padding: 0;

            li {
                font-size: large;

                a {
                    text-decoration: none;
                    color: ${(props) => props.theme.colors.backgroundLight};
                    transition: color 0.3s ease-in-out;
                }
                a:hover {
                    color: ${(props) => props.theme.colors.primary};
                }
            }
        }
    }

    .nav_btn {
        button {
            background-color: ${(props) => props.theme.colors.primary};
            color: ${(props) => props.theme.colors.backgroundLight};
            font-weight: 500;
            padding: 8px 20px;
            border: none;
            border-radius: 10px;
            margin-right: 10px;
            cursor: pointer;
        }
        button:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                ${(props) => props.theme.colors.primary};
        }
    }
`;
function Navbar() {
    return (
        <NavbarContainer>
            <div className="logo_container">
                <img src={logo} className="main_logo" />
                <h1 className="logo_text">Arjun Digital Solutions</h1>
            </div>
            <div className="nav_links">
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="services">Services</Link>
                    </li>
                    <li>
                        <Link to="portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="nav_btn">
                <button>Get a Quote</button>
            </div>
        </NavbarContainer>
    );
}

export default Navbar;
