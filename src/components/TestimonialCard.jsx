import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    font-family: ${props => props.theme.fonts.secondaryFont};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px #1f2937;
    background-color: ${props => props.theme.colors.backgroundDark};
    color: ${props => props.theme.colors.backgroundLight};
    max-width: 480px;
    max-height: 300px;
    border-radius: 10px;
    padding: 20px;

    .client_testimonial{
        color: ${props => props.theme.colors.backgroundLight};
        margin: 7px;
    }

    .client_name{
        font-weight: bold;
        margin-top: 5px;
    }

    .client_details{
        font-size: 14px;
        color: ${props => props.theme.colors.primary};
    }
`

const ImageContainer = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 100px;
    height: 100px;
    margin: 7px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
 function TestimonialCard(props) {
  return (
    <div>
        <CardContainer>
            <ImageContainer>
                <img src={props.image} alt="Client's Image" />
            </ImageContainer>
            <i className='client_testimonial'>"{props.quotes}"</i>
            <i className='client_name'>{props.clientName}</i>
            <p className='client_details'>{props.clientDetails}</p>
        </CardContainer>
    </div>
  )
}

export default TestimonialCard;
