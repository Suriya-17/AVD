import React from "react";
import styled from "styled-components";
import ApproachCard from "../../components/Services/ApproachCard";
import StrategyCard from "../../components/Services/StrategyCard";
import SuccessStoryCard from "../../components/Services/SuccessStoryCard";
import CommonHero from "../../components/CommonHero";
import { HeroData } from "../../data";

const PageContainer = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

/* ---------- APPROACH SECTION ---------- */
const ApproachContainer = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    display: flex;
    flex-wrap: wrap;
    color: ${(props) => props.theme.colors.backgroundLight};
    padding: 70px 40px;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 40px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding: 60px 30px;
        gap: 30px;
    }
`;

const ApproachText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 600px;

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 600;
        font-size: 2.3rem;
    }

    p {
        font-family: ${(props) => props.theme.fonts.secondaryFont};
        font-size: 18px;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.backgroundLight};
        text-align: justify;
    }

    button {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.backgroundLight};
        font-weight: bold;
        padding: 10px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        width: fit-content;
        transition: all 0.3s ease;
    }

    button:hover {
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
            ${(props) => props.theme.colors.primary};
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        text-align: center;
        align-items: center;

        p {
            width: 100%;
        }
    }
`;

const ApproachCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-gap: 30px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(250px, 1fr));
        justify-items: center;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

/* ---------- STRATEGY SECTION ---------- */
const StrategyContainer = styled.section`
    background-color: ${(props) => props.theme.colors.backgroundDark};
    color: ${(props) => props.theme.colors.backgroundLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 40px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 50px 20px;
    }

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 600;
        font-size: 2.3rem;

        @media (max-width: 768px) {
            font-size: 1.9rem;
        }
    }

    .sub-text {
        font-family: ${(props) => props.theme.fonts.secondaryFont};
        max-width: 650px;
        font-size: 1rem;
        margin-top: 10px;
        color: ${(props) => props.theme.colors.textLight};
        line-height: 1.5;
    }
`;

const StrategyCardContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;

    @media (max-width: 576px) {
        gap: 25px;
    }
`;

/* ---------- SUCCESS STORIES SECTION ---------- */
const SuccessStoryContainer = styled.section`
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    color: ${(props) => props.theme.colors.backgroundLight};
    text-align: center;
    padding: 70px 40px;

    @media (max-width: 768px) {
        padding: 50px 20px;
    }

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 600;
        font-size: 2.3rem;

        @media (max-width: 768px) {
            font-size: 1.9rem;
        }
    }

    .sub-text {
        font-family: ${(props) => props.theme.fonts.secondaryFont};
        max-width: 650px;
        margin: 10px auto 30px auto;
        color: ${(props) => props.theme.colors.textLight};
        font-size: 1rem;
        line-height: 1.5;
    }
`;

const StoryCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;

    @media (max-width: 576px) {
        gap: 25px;
    }
`;

/* ---------- DOMINATE SECTION ---------- */
const DominateContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    color: ${(props) => props.theme.colors.backgroundLight};
    padding: 70px 30px;

    @media (max-width: 768px) {
        padding: 50px 20px;
    }

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 600;
        font-size: 2.3rem;

        @media (max-width: 768px) {
            font-size: 1.9rem;
        }
    }

    .sub-text {
        font-family: ${(props) => props.theme.fonts.secondaryFont};
        max-width: 650px;
        margin: 10px auto;
        color: ${(props) => props.theme.colors.textLight};
        font-size: 1rem;
        line-height: 1.6;
    }

    button {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.backgroundLight};
        font-weight: bold;
        padding: 14px 30px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 20px;
        transition: background 0.3s ease;

        &:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                ${(props) => props.theme.colors.primary};
        }
    }
`;

function SMM() {
    return (
        <PageContainer>
            <CommonHero data = { HeroData.smmData } />

            <ApproachContainer>
                <ApproachText>
                    <h2>Our Approach to Social Success</h2>
                    <p>
                        At Arjun Vision Digitals, we don't just post content; we
                        build communities. Our social media marketing service is
                        designed to create a vibrant and interactive presence
                        for your brand across all relevant platforms.
                    </p>
                    <p>
                        We combine creative content with data-driven insights to
                        ensure your message not only reaches but also resonates
                        with your target audience. From strategy development to
                        campaign execution and analysis, we handle every aspect
                        of your social media to drive meaningful engagement and
                        measurable results.
                    </p>
                    <button>Start Your Campaign</button>
                </ApproachText>
                <ApproachCardContainer>
                    <ApproachCard
                        icon="groups"
                        title="Community Building"
                        desc="Fostering loyal brand advocates."
                    />
                    <ApproachCard
                        icon="campaign"
                        title="Targeted Advertising"
                        desc="Reaching the right people, at the right time."
                    />
                    <ApproachCard
                        icon="draw"
                        title="Content Creation"
                        desc="Compelling visuals and copy that convert."
                    />
                    <ApproachCard
                        icon="analytics"
                        title="Performance Analytics"
                        desc="Data-driven optimization for ROI."
                    />
                </ApproachCardContainer>
            </ApproachContainer>
            <StrategyContainer>
                <h2>Strategies That Drive Results</h2>
                <p className="sub-text">
                    Our social media services are tailored to meet your unique
                    business objectives. Here's a glimpse of what we offer:
                </p>
                <StrategyCardContainer>
                    <StrategyCard
                        title="Platform Management"
                        desc="Full-service management of your profiles on platforms like Instagram, Facebook, Twitter, LinkedIn, and TikTok."
                    />
                    <StrategyCard
                        title="Platform Management"
                        desc="Full-service management of your profiles on platforms like Instagram, Facebook, Twitter, LinkedIn, and TikTok."
                    />
                    <StrategyCard
                        title="Platform Management"
                        desc="Full-service management of your profiles on platforms like Instagram, Facebook, Twitter, LinkedIn, and TikTok."
                    />
                </StrategyCardContainer>
            </StrategyContainer>
            <SuccessStoryContainer>
                <h2>Success Stories</h2>
                <p className="sub-text">
                    See how we've transformed the social media presence of our
                    clients.
                </p>
                <StoryCardContainer>
                    <SuccessStoryCard
                        image="src/assets/placeholder.png"
                        clientName="ABC Company"
                        outcome="200% increase in revenue"
                        description="Their creative campaigns and consistent engagement strategy dramatically increased our online community and sales."
                    />
                    <SuccessStoryCard
                        image="src/assets/placeholder.png"
                        clientName="ABC Company"
                        outcome="200% increase in revenue"
                        description="Their creative campaigns and consistent engagement strategy dramatically increased our online community and sales."
                    />
                    <SuccessStoryCard
                        image="src/assets/placeholder.png"
                        clientName="ABC Company"
                        outcome="200% increase in revenue"
                        description="Their creative campaigns and consistent engagement strategy dramatically increased our online community and sales."
                    />
                </StoryCardContainer>
            </SuccessStoryContainer>
            <DominateContainer>
                <h2>Ready to Dominate Social Media?</h2>
                <p className="sub-text">
                    Let's create a social media strategy that captivates your
                    audience and achieves your business goals.
                </p>
                <button>Get Your Free Social Media Audit</button>
            </DominateContainer>
        </PageContainer>
    );
}

export default SMM;
