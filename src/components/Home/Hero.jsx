import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Carousel } from "react-bootstrap";


const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.778);
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
  max-width: 800px;
  padding: 0 1rem;
`;

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Paragraph = styled.p`
  font-family: ${(props) => props.theme.fonts.secondaryFont};
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #dcdcdc;
`;

const Button = styled.button`
  background-color: ${({theme}) => theme.colors.primary};
  border: none;
  color: white;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ff8f33;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Carousel controls={false} indicators={false} interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Digital Background 1"
            style={{ height: "60vh", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Digital Background 2"
            style={{ height: "60vh", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
            alt="Digital Background 3"
            style={{ height: "60vh", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>

      <Overlay />

      <Content>
        <Heading>
          Elevate Your Brand with Arjun Vision Digitals
        </Heading>
        <Paragraph>
          We craft innovative digital strategies to help your business thrive in
          the digital landscape. From SEO to social media, we've got you covered.
        </Paragraph>
        <Button>Get Started</Button>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;
