import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    justify-content: center;
    align-items: center;
    gap: 2px;
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    height: 180px;
    padding: 20px;
    color:${props => props.theme.colors.backgroundLight};
    border: solid 1px ${props => props.theme.colors.backgroundLight};
    background-color: #0e1119;
    border-radius: 12px;

    h6{
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 500;
        font-size: 1.2rem;
    }

    p{
        text-align: center;
    }

    span{
        margin-bottom: 10px;
        color: ${props => props.theme.colors.primary};
        font-size: 40px;
    }
    
`

function ApproachCard(props) {
  return (
    <CardContainer>
        <span className="material-symbols-outlined">{props.icon}</span>
        <h6>{props.title}</h6>
        <p>{props.desc}</p>
    </CardContainer>
    
  )
}

export default ApproachCard