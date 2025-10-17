import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 2px;
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    height: 200px;
    padding: 20px;
    color: ${(props) => props.theme.colors.backgroundLight};
    border: none;
    background-color: #0e1119;
    border-radius: 12px;

    h6 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 500;
        font-size: 1.2rem;
    }
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.primary};
    }
    p {
        width: inherit;
    }
`;

function StrategyCard(props) {
    return (
        <CardContainer>
            <h6>{props.title}</h6>
            <p>{props.desc}</p>
            <Link>
                <p>
                    Learn More <b>&rarr;</b>
                </p>
            </Link>
        </CardContainer>
    );
}

export default StrategyCard;
