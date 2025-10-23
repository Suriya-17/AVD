import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import ApproachCard from "../../components/Services/ApproachCard";
import StrategyCard from "../../components/Services/StrategyCard";
import Footer from "../../components/Footer";
import SuccessStoryCard from "../../components/Services/SuccessStoryCard";

const PageContainer = styled.div`
    position: relative;
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    padding-bottom: 200px;
    min-height: 100vh;
`;

const HeroContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 70px 30px;
    color: ${(props) => props.theme.colors.backgroundLight};
    min-height: 40vh;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-image: url(src/assets/placeholder.png);
        background-size: cover;
        background-position: center;

        opacity: 0.4;

        z-index: -1;
    }

    h1 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 800;
        font-size: 3rem;
    }

    p {
        font-family: ${(props) => props.theme.fonts.secondaryFont};
        width: 800px;
        overflow-wrap: break-word;
        text-align: center;
        font-size: 18px;
    }
`;

const ApproachContainer = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    display: flex;
    color: ${(props) => props.theme.colors.backgroundLight};
    padding: 70px 40px;
    justify-content: space-evenly;
    align-items: center;
`;

const ApproachText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 600;
        font-size: 2.3rem;
    }
    p {
        width: 800px;
        overflow-wrap: break-word;
    }
    button {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.backgroundLight};
        font-weight: bold;
        padding: 8px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        width: 250px;
    }
    button:hover {
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
            ${(props) => props.theme.colors.primary};
    }
`;
const ApproachCardContainer = styled.div`
    display: grid;
    grid-template-columns: 300px 300px;
    grid-template-rows: 200px 200px;
`;

const StrategyContainer = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundDark};
    color: ${(props) => props.theme.colors.backgroundLight};
    display: flex;
    padding: 70px 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 600;
        font-size: 2.3rem;
    }
    .sub-text {
        font-family: ${(props) => props.theme.fonts.secondaryFont};
        width: 600px;
        text-align: center;
        overflow-wrap: break-word;
    }
`;

const StrategyCardContainer = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 60px;
`;
const SuccessStoryContainer = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.backgroundLight};
    padding: 70px 40px;
    justify-content: center;
    align-items: center;
    min-height: 40vh;

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 600;
        font-size: 2.3rem;
    }
    .sub-text {
        font-family: ${(props) => props.theme.fonts.secondaryFont};
        width: 600px;
        text-align: center;
        overflow-wrap: break-word;
    }
`;

const StoryCardContainer = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 60px;
`;

const DominateContainer = styled.div`
    display: flex;
    position: relative;
    gap: 5px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.backgroundGrey};
    padding: 70px 30px;
    color: ${(props) => props.theme.colors.backgroundLight};
    min-height: 40vh;

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-weight: 600;
        font-size: 2.3rem;
    }
    .sub-text {
        font-family: ${(props) => props.theme.fonts.secondaryFont};
        width: 600px;
        text-align: center;
        overflow-wrap: break-word;
    }

    button {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.backgroundLight};
        font-weight: bold;
        padding: 15px 30px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 15px;
    }
    button:hover {
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
            ${(props) => props.theme.colors.primary};
    }
`;

function SEO() {
    return (
        <PageContainer>
            <HeroContainer>
                <h1>Search Engine Optimization</h1>
                <p className="sub-text">
                    Engage, influence, and grow your audience with our dynamic
                    social media strategies. We turn followers into loyal
                    customers. Our Approach to Social Success.
                </p>
            </HeroContainer>

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

export default SEO;
