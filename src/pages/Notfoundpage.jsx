import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
    background-color: #121212; /* Dark background */
    color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.secondaryFont}; /* Assuming a modern sans-serif like Poppins/Inter/Arial */
`;

const ErrorCode = styled.h1`
    font-family: ${({theme}) => theme.fonts.headingFont};
    font-size: 10rem; /* 160px for a massive, impactful number */
    font-weight: 800;
    color: #FF6F00; /* Orange accent color */
    margin: 0;
    line-height: 1.5;
    @media (max-width: 600px) {
        font-size: 6rem;
    }
`;

const SubHeading = styled.h2`
    font-family: ${({theme}) => theme.fonts.headingFont};
    font-size: 2.25rem; /* 36px */
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #E0E0E0;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const Message = styled.p`
    font-size: 1.125rem; /* 18px */
    color: #A9A9A9;
    max-width: 600px;
    margin-bottom: 2.5rem; /* 40px */
    line-height: 1.6;
`;

const HomeButton = styled.button`
    background-color: #FF6F00; 
    color: #ffffff; 
    border: none;
    padding: 1rem 2.5rem; 
    font-size: 1.125rem; 
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(255, 111, 0, 0.4);

    &:hover {
        background-color: #FF8F33; 
        transform: translateY(-2px); 
    }
`;

const Notfoundpage = () => {
    return (
        <PageContainer>
            <ErrorCode>404</ErrorCode>
            <SubHeading>Page Not Found</SubHeading>
            <Message>
                We can't seem to find the page you're looking for. It might have been moved, updated, or simply doesn't exist.
            </Message>
            <Link to="/">
                <HomeButton href="/">
                    Go Back Home
                </HomeButton>
            </Link>
        </PageContainer>
    );
};

export default Notfoundpage;