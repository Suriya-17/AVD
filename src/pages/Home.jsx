import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import HeroCarousel from "../components/Home/Hero";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import FAQ from "../components/Home/FAQ";
import ClientStoryCard from "../components/ClientStoryCard";

const HomeContainer = styled.section`
    position: relative;
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    padding-bottom: 200px;
    min-height: 100vh;
`;

const ServicesContainer = styled.section`
    min-height: 80vh;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.backgroundLight};
    
    .font-heading {
      font-family: ${({ theme }) => theme.fonts.headingFont};
      padding: 2rem;
      font-size: 3rem;
    }

    .gridContainer {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
      }
      `;
const ClientStoriesContainer = styled.section`
    min-height: 80vh;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    color: ${({ theme }) => theme.colors.backgroundLight};

    .font-heading {
      font-family: ${({ theme }) => theme.fonts.headingFont};
      padding: 2rem;
      font-size: 3rem;
    }

    .gridContainer {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }
`;

function Home() {
    return (
        <HomeContainer>
            <Navbar />
            <HeroCarousel />

            <ServicesContainer>
                <h2 className="font-heading">Our Services</h2>
                <div className="gridContainer">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </ServicesContainer>

            <ClientStoriesContainer>
                <h2 className="font-heading">Client Success Stories</h2>
                <div className="gridContainer">
                    <ClientStoryCard />
                    <ClientStoryCard />
                    <ClientStoryCard />
                </div>
            </ClientStoriesContainer>

            <FAQ/>

            <Footer />
        </HomeContainer>
    );
}

export default Home;
