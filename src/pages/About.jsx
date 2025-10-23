import React from "react";
import styled from "styled-components";
// import aboutBook from "../assets/about-book.png";
import CoreValues from "../components/About/CoreValues";
import TeamSection from "../components/About/TeamSection";
import CommonHero from "../components/CommonHero";
import { HeroData } from "../data";

const AboutContainer = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundDark};
    color: ${(props) => props.theme.colors.backgroundLight};
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    line-height: 1.6;

    h2 {
        font-size: 2.5rem;
    }

    h3{
        font-size: 1.8rem;
    }

    p {
        font-size: 1.15rem;
    }
`;

const JourneySection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    padding: 100px 8%;

    img {
        width: 350px;
        border-radius: 15px;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
    }

    .content {
        max-width: 600px;

        h2 {
            font-family: ${(props) => props.theme.fonts.headingFont};
            /* font-size: 1.8rem; */
            margin-bottom: 20px;
        }

        p {
            color: ${(props) => props.theme.colors.backgroundLightGrey};
            margin-bottom: 20px;
        }
    }

    @media (max-width: 992px) {
        flex-direction: column;
        text-align: center;
        img {
            width: 80%;
        }
    }
`;

const CTASection = styled.section`
    text-align: center;
    padding: 100px 8%;
    background-color: ${(props) => props.theme.colors.backgroundMedium};

    h2 {
      font-family: ${(props) => props.theme.fonts.headingFont};
      /* font-size: 2rem; */
      margin-bottom: 10px;
    }

    p {
        color: ${(props) => props.theme.colors.textMuted};
        margin-bottom: 30px;
    }

    button {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.backgroundLight};
        font-weight: 500;
        padding: 12px 28px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s ease;

        &:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                ${(props) => props.theme.colors.primary};
        }
    }
`;

function About() {
    return (
        <AboutContainer>
            <CommonHero data={HeroData.aboutData} />

            <JourneySection>
                <img src={""} alt="Company image" />
                <div className="content">
                    <h2>Our Journey & Mission</h2>
                    <p>
                        Founded on the principle of innovation, Arjun Vision
                        Digitals began as a small team of digital enthusiasts.
                        Today, we are a full-service digital marketing agency
                        dedicated to helping businesses navigate the
                        complexities of the online world. Our mission is to
                        empower our clients by building a powerful digital
                        presence that drives growth, engagement, and success.
                    </p>
                    <p>
                        We believe in the power of a tailored strategy. No two
                        businesses are alike, and neither are our solutions. We
                        are committed to crafting bespoke digital experiences
                        that resonate with your audience and deliver tangible
                        results.
                    </p>
                </div>
            </JourneySection>

            <CoreValues />
            <TeamSection />

            <CTASection>
                <h2>Join Our Vision</h2>
                <p>
                    Ready to elevate your brand's digital presence? Partner with
                    us to create something extraordinary.
                </p>
                <button>Start a Project With Us</button>
            </CTASection>
        </AboutContainer>
    );
}

export default About;
