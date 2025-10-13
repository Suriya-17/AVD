import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    font-family: ${props => props.theme.fonts.secondaryFont};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 1px ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.backgroundLight};
    background-color: ${props => props.theme.colors.backgroundDark};
    width: 300px;
    height: 310px;
    border-radius: 12px;
    overflow: hidden;
    padding: 20px;
`

const ImageContainer = styled.img`
        width: 100%;
        height: 150px;
        border-radius: 12px ;
`

const ClientStory = styled.p`
    margin-top: 14px;
    margin-bottom: 0px;
`

const ClientName = styled.p`
    margin-top: 2px;
    margin-bottom: 1px;
    color: #8A909A;
`

function ClientStoryCard(props) {
  return (
     <div>
        <CardContainer>
            <ImageContainer src={props.image}/>
            <ClientStory>"{props.clientStory}"</ClientStory>
            <ClientName>- {props.clientName}</ClientName>
        </CardContainer>
    </div>
  )
}

export default ClientStoryCard;