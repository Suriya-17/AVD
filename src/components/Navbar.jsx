import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarContainer = styled.nav`
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    color: ${(props) => props.theme.colors.backgroundLight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px ${(props) => props.theme.colors.primaryDark};
    background-color: ${(props) => props.theme.colors.backgroundDark};
    padding: 0 40px;
    height: 70px;
    position: sticky;
    top: 0;
    z-index: 1000;

    @media (max-width: 900px) {
        padding: 0 20px;
    }

    .logo_container {
        display: flex;
        align-items: center;
        text-decoration: none;

        .main_logo {
            
            height: 25px;
            margin-right: 10px;
        }

        .logo_text {
            font-size: 1.35rem;
            font-weight: 600;
            color: ${(props) => props.theme.colors.backgroundLight};
            margin: 0;
        }
    }

    .nav_links {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
            display: flex;
            list-style-type: none;
            gap: 40px;
            margin: 0;
            padding: 0;

            li {
                font-size: large;

                .link {
                    text-decoration: none;
                    color: ${(props) => props.theme.colors.backgroundLight};
                    transition: color 0.3s ease-in-out;
                }

                .active-link {
                    color: ${(props) => props.theme.colors.primary};
                }

                a:hover {
                    color: ${(props) => props.theme.colors.primary};
                }
            }
        }

        @media (max-width: 900px) {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: ${(props) => props.theme.colors.backgroundDark};
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            padding: 1.5rem 0;
            border-top: 1px solid ${(props) => props.theme.colors.primaryDark};
            transition: all 0.3s ease;
            opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
            transform: ${({ $isOpen }) =>
                $isOpen ? "translateY(0)" : "translateY(-20px)"};
            pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

            ul {
                flex-direction: column;
                gap: 20px;
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
            cursor: pointer;
            transition: all 0.3s ease;
        }
        button:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                ${(props) => props.theme.colors.primary};
        }

        @media (max-width: 900px) {
            display: none;
        }
    }

    .menu_icon {
        display: none;
        font-size: 1.8rem;
        color: ${(props) => props.theme.colors.backgroundLight};
        cursor: pointer;

        @media (max-width: 900px) {
            display: block;
        }
    }
`;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavbarContainer $isOpen={isOpen}>
            <Link to="/" className="logo_container">
                <img src={logo} alt="logo" className="main_logo" />
                <h1 className="logo_text">Arjun Digital Solutions</h1>
            </Link>

            {/* Center: Nav Links */}
            <div className="nav_links">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "link active-link" : "link"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) =>
                                isActive ? "link active-link" : "link"
                            }
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "link active-link" : "link"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "link active-link" : "link"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Right: CTA Button */}
            <div className="nav_btn">
                <button>Get a Quote</button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="menu_icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX /> : <FiMenu />}
            </div>
        </NavbarContainer>
    );
}

export default Navbar;
