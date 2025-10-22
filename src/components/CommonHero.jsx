import styled from "styled-components";

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    min-height: 40vh; 
    height: 50vh;
    background-color: ${({ theme }) => theme.colors.backgroundMedium};
    padding: 20px 15px; 

    @media (max-width: 768px) {
        height: 40vh;
        min-height: 300px;
    }
`;

const Content = styled.div`
    text-align: center;
    padding: 50px 20px;
    color: ${(props) => props.theme.colors.backgroundLight};
    line-height: 1.5; 

    @media (max-width: 576px) {
        padding: 30px 10px;
    }

    h1 {
        font-family: ${({ theme }) => theme.fonts.headingFont};
        font-weight: 800;
        font-size: min(3.5rem, 8vw); 
        margin-bottom: 0.5em;

        @media (max-width: 768px) {
            font-size: min(2.5rem, 7vw);
        }

        @media (max-width: 576px) {
            font-size: min(1.8rem, 6.5vw);
        }
    }

    p {
        font-family: ${({ theme }) => theme.fonts.secondaryFont};
        max-width: 800px; 
        width: 100%; 
        margin: 0 auto; 
        
        font-size: min(1.12rem, 3.5vw); 

        @media (max-width: 768px) {
            font-size: min(1rem, 3vw);
        }
         @media (max-width: 576px) {
            font-size: min(0.95rem, 4vw);
        }
    }
`;

const CommonHero = ({ data }) => {
    return (
        <HeroContainer>
            <Content>
                <h1>{data.title}</h1>
                <p className="sub-text">{data.description}</p>
            </Content>
        </HeroContainer>
    );
};

export default CommonHero;