import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
    font-family: ${props => props.theme.fonts.secondaryFont};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 1px ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.backgroundLight};
    background-color: #1f2937;
    width: 300px;
    height: 380px;
    border-radius: 12px;
    overflow: hidden;

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        margin-left: 15px;
        margin-bottom: 14px;
    }
`
const ImageContainer = styled.div`
        position: relative;
        width: 100%;
        height: 190px;
        background-image: url(${(props) => props.image});
        background-size: cover;
        background-position: center;
`
const Overlay = styled.div`
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
`

const Heading = styled.h3`
        position: absolute;
        font-size: 1.2rem;
        bottom: 12px;
        left: 16px;
        font-family: ${props => props.theme.fonts.headingFont};
        color: ${props => props.theme.colors.backgroundLight};
        overflow-wrap: break-word;
        font-weight: bold;
        z-index: 2;
        margin: 0;
`
const Description = styled.p`
        margin: 15px;
`


function ServiceCard(props) {
  return (
    <div>
        <CardContainer>
            <ImageContainer image={props.image}>
                <Overlay/>
                <Heading>{props.serviceName}</Heading>
            </ImageContainer>
            <Description>{props.description}</Description>
            <Link><p>Learn More  <b>&rarr;</b></p></Link>
        </CardContainer>
    </div>
  )
}

export default ServiceCard;