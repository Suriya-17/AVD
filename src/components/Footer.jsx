import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    color: ${(props) => props.theme.colors.backgroundLight};
    background-color: ${(props) => props.theme.colors.backgroundDark};
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    /* padding: 35px 300px 35px 300px; */
`;
const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px ${(props) => props.theme.colors.primary};
    padding: 20px;
`;

const QuickLinks = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
    text-decoration: none;
    li {
        a {
            text-decoration: none;
            color: ${(props) => props.theme.colors.backgroundLight};
            transition: color 0.3s ease-in-out;
        }
        a:hover {
            color: ${(props) => props.theme.colors.primary};
        }
    }
`;
const SocialMediaLinks = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
    li {
        a {
            text-decoration: none;
            color: ${(props) => props.theme.colors.backgroundLight};
            transition: color 0.3s ease-in-out;
        }
        a:hover {
            color: ${(props) => props.theme.colors.primary};
        }
    }
`;

const CopyRightText = styled.p`
    font-size: small;
    text-align: center;
    padding: 1rem;
    margin: 30px;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterLinks>
                <QuickLinks>
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
                </QuickLinks>
                <SocialMediaLinks>
                    <li>
                        <Link>
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i className="fa-brands fa-instagram fa-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i className="fa-brands fa-twitter fa-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i className="fa-brands fa-linkedin fa-xl"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i className="fa-brands fa-youtube fa-xl"></i>
                        </Link>
                    </li>
                </SocialMediaLinks>
            </FooterLinks>
            <CopyRightText>
                {" "}
                &copy; 2025 Arjun Digital Solutions. All Rights Reserved.
            </CopyRightText>
        </FooterContainer>
    );
}

export default Footer;
