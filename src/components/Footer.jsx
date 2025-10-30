import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const FooterContainer = styled.footer`
    max-width: 1440px;
    color: ${(props) => props.theme.colors.backgroundLight};
    background-color: ${(props) => props.theme.colors.backgroundDark};
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 60px 10px;
    margin: auto;

    @media (max-width: 1024px) {
        padding: 30px 40px;
    }

    @media (max-width: 768px) {
        padding: 25px 20px;
    }

    @media (max-width: 576px) {
        padding: 20px 10px;
    }
`;

const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px ${(props) => props.theme.colors.primary};
    padding: 20px 0;
    width: 100%;
    max-width: 1200px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }
`;

const QuickLinks = styled.ul`
    display: flex;
    gap: 25px;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.backgroundLight};
        transition: color 0.3s ease-in-out;
    }

    li a:hover {
        color: ${(props) => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
`;

const SocialMediaLinks = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.backgroundLight};
        transition: color 0.3s ease-in-out;
    }

    li a:hover {
        color: ${(props) => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const CopyRightText = styled.p`
    font-size: small;
    text-align: center;
    padding: 1rem;
    margin: 20px 0 10px;
    color: ${(props) => props.theme.colors.backgroundLight};
    opacity: 0.9;

    @media (max-width: 576px) {
        font-size: 0.75rem;
        padding: 0.5rem;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterLinks>
                <QuickLinks>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </QuickLinks>

                <SocialMediaLinks>
                    <li>
                        <Link to="#">
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fa-brands fa-instagram fa-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fa-brands fa-twitter fa-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fa-brands fa-linkedin fa-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fa-brands fa-youtube fa-xl"></i>
                        </Link>
                    </li>
                </SocialMediaLinks>
            </FooterLinks>

            <CopyRightText>
                &copy; {new Date().getFullYear()} Arjun Digital Solutions. All
                Rights Reserved.
            </CopyRightText>
        </FooterContainer>
    );
}

export default Footer;
