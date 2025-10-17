import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    border: solid 1px ${(props) => props.theme.colors.primaryDark};
    color: ${(props) => props.theme.colors.backgroundLight};
    background-color: #1f2937;
    border-radius: 12px;
    max-width: 350px;
`;

const ImageContainer = styled.div`
    position: relative;
    height: 200px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
`;
const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
`;

const Heading = styled.h3`
    position: absolute;
    font-size: 1.2rem;
    bottom: 12px;
    left: 16px;

    font-family: ${(props) => props.theme.fonts.headingFont};
    color: ${(props) => props.theme.colors.backgroundLight};
    overflow-wrap: break-word;
    font-weight: 700;
    z-index: 2;
    margin: 0;
`;

const TextContainer = styled.div`
    padding: 1rem;
    color: ${({ theme }) => theme.colors.backgroundLightGrey};

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.primary};

        display: flex;
        gap: 5px;
    }
`;

function ServiceCard(props) {
    return (
        <CardContainer>
            <ImageContainer image={props.image}>
                <Overlay />
                <Heading>{props.serviceName}</Heading>
            </ImageContainer>
            <TextContainer>
                <p>{props.description}</p>
                <Link to={props.link}>
                    Learn More <span>&rarr;</span>
                </Link>
            </TextContainer>
        </CardContainer>
    );
}

export default ServiceCard;
