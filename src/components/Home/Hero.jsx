import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

const HeroWrapper = styled.section`
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;

    @media (max-width: 992px) {
        height: 50vh;
    }

    @media (max-width: 768px) {
        height: 45vh;
    }

    @media (max-width: 576px) {
        height: 40vh;
    }

    @media (max-width: 400px) {
        height: 38vh;
    }
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.78);
    z-index: 1;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    z-index: 2;
    max-width: 850px;
    padding: 0 1rem;

    @media (max-width: 768px) {
        max-width: 90%;
        padding: 0 0.8rem;
    }

    @media (max-width: 480px) {
        max-width: 95%;
        padding: 0 0.6rem;
    }
`;

const Heading = styled.h1`
    font-family: ${(props) => props.theme.fonts.headingFont};
    font-size: clamp(1.4rem, 4vw + 0.5rem, 3.2rem);
    font-weight: 700;
    margin-bottom: 0.8rem;
    line-height: 1.2;

    @media (max-width: 576px) {
        margin-bottom: 0.5rem;
    }

    @media (max-width: 400px) {
        font-size: 1.2rem;
        line-height: 1.15;
    }
`;

const Paragraph = styled.p`
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    font-size: clamp(0.85rem, 2vw, 1.1rem);
    line-height: 1.5;
    margin-bottom: 1.2rem;
    color: #dcdcdc;

    @media (max-width: 576px) {
        margin-bottom: 0.8rem;
        line-height: 1.4;
    }

    @media (max-width: 400px) {
        font-size: 0.8rem;
        line-height: 1.35;
    }
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: white;
    font-size: clamp(0.8rem, 2vw, 1rem);
    padding: 0.6rem 1.6rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: #ff8f33;
    }

    @media (max-width: 400px) {
        padding: 0.5rem 1.2rem;
    }
`;

const Hero = () => {
    const imageStyle = {
        height: "100%",
        objectFit: "cover",
    };

    return (
        <HeroWrapper>
            <Carousel controls={false} indicators={false} interval={4000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        alt="Digital Background 1"
                        style={imageStyle}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                        alt="Digital Background 2"
                        style={imageStyle}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
                        alt="Digital Background 3"
                        style={imageStyle}
                    />
                </Carousel.Item>
            </Carousel>

            <Overlay />

            <Content>
                <Heading>Elevate Your Brand with Arjun Vision Digitals</Heading>
                <Paragraph>
                    We craft innovative digital strategies to help your business
                    thrive in the digital landscape. From SEO to social media,
                    we’ve got you covered.
                </Paragraph>
                <Button>Get Started</Button>
            </Content>
        </HeroWrapper>
    );
};

export default Hero;
