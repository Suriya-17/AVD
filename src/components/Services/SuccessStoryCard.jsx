import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
    position: relative;
    font-family: ${props => props.theme.fonts.secondaryFont};
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.theme.colors.backgroundLight};
    background-color: #0e1119;
    width: 380px;
    height: 350px;
    border-radius: 12px;
    overflow: hidden;

    a{
        position: absolute;
        bottom: 0;
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        margin-left: 15px;
        margin-bottom: 5px;
    }
`
const ImageContainer = styled.div`
        position: absolute;
        top: 0;
        width: 100%;
        height: 190px;
        background-image: url(${(props) => props.image});
        background-size: cover;
        background-position: center;

        p{
            color: ${props => props.theme.colors.primary};
            position: absolute;
            bottom: 0;
            padding: 5px;
            left: 9px;
        }
`
const Overlay = styled.div`
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
`

const Heading = styled.h3`
        position: absolute;
        font-size: 1.2rem;
        bottom: 50px;
        left: 16px;
        font-family: ${props => props.theme.fonts.headingFont};
        color: ${props => props.theme.colors.backgroundLight};
        overflow-wrap: break-word;
        font-weight: bold;
        z-index: 2;
        margin: 0;
`
const Description = styled.p`
        position: absolute;
        top: 200px;
        padding: 15px;
        color:${props => props.theme.colors.backgroundLight};
`


function SuccessStoryCard(props) {
  return (
            <CardContainer>
                <ImageContainer image={props.image}>
                    <Overlay/>
                    <Heading>{props.clientName}</Heading>
                    <p>{props.outcome}</p>
                </ImageContainer>
                <Description>{props.description}</Description>
                <Link><p>Learn More  <b>&rarr;</b></p></Link>
            </CardContainer>
  )
}

export default SuccessStoryCard