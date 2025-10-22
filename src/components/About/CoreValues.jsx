import React from "react";
import styled from "styled-components";

const ValuesContainer = styled.section`
    text-align: center;
    padding: 100px 8%;
    background-color: ${(props) => props.theme.colors.backgroundDark};

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-size: 2rem;
        margin-bottom: 10px;
    }

    p {
        color: ${(props) => props.theme.colors.textMuted};
        margin-bottom: 50px;
    }

    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
    }
`;

const ValueCard = styled.div`
    background-color: #0d0f12;
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
    border-radius: 15px;
    padding: 40px 25px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: ${(props) => props.theme.colors.primary};
    }

    h3 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        color: ${(props) => props.theme.colors.primary};
        margin-bottom: 15px;
        font-size: 1.2rem;
    }

    p {
        color: ${(props) => props.theme.colors.textMuted};
        font-size: 0.95rem;
    }
`;

function CoreValues() {
    const values = [
        {
            title: "Innovation",
            desc: "We constantly explore new technologies and creative approaches to stay ahead of the curve and deliver cutting-edge solutions.",
        },
        {
            title: "Partnership",
            desc: "We work collaboratively with our clients, viewing their success as our own. We build strong, transparent relationships based on trust.",
        },
        {
            title: "Excellence",
            desc: "We are committed to the highest standards of quality in everything we do, ensuring exceptional results from start to finish.",
        },
    ];

    return (
        <ValuesContainer>
            <h2>Our Core Values</h2>
            <p>The principles that guide our work and define our character.</p>

            <div className="values-grid">
                {values.map((value, index) => (
                    <ValueCard key={index}>
                        <h3>{value.title}</h3>
                        <p>{value.desc}</p>
                    </ValueCard>
                ))}
            </div>
        </ValuesContainer>
    );
}

export default CoreValues;
