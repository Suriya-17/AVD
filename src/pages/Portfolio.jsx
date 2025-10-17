import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageContainer from '../components/Portfolio/ImageContainer';

const PageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.backgroundDark};
    color: ${props => props.theme.colors.backgroundLight};
    width: 100%;
    min-height: 100vh;
    padding-bottom: 200px ;
    
`


const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
    gap: 3px;
    background-color: ${props => props.theme.colors.backgroundGrey};
    padding: 70px;

    h1{
        font-family: ${props => props.theme.fonts.headingFont};
        font-weight: bold;
    }
    p{

         font-family: ${props => props.theme.fonts.secondaryFont};
         width: 600px;
         text-align: center;
         overflow-wrap: break-word;
         
    }
    hr{
        width: 60px;
        border: 2px solid #f97306;
        border-radius: 2px;
        opacity: 1;
    }
    
`

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 40px;
    background-color:${props => props.theme.colors.backgroundDark};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  max-width: 1200px;

    & > div {
    border-radius: 12px;
    overflow: hidden;
  }
`

const ContactUsCTA = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    gap: 3px;
    background-color: ${props => props.theme.colors.backgroundGrey};
    padding: 70px;

    h1{
        font-family: ${props => props.theme.fonts.headingFont};
        font-weight: bold;
    }
    p{

         font-family: ${props => props.theme.fonts.secondaryFont};
         width: 600px;
         text-align: center;
         overflow-wrap: break-word;
         
    }

    button {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.backgroundLight};
      font-weight: bold;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      margin-right: 10px;
      cursor: pointer;
    }

    button:hover{
        background: linear-gradient(
                     rgba(0, 0, 0, 0.1),
                     rgba(0, 0, 0, 0.1)
                    ), ${props => props.theme.colors.primary};
    }
    
`

function Portfolio() {
  return (
    <PageContainer>
        <Navbar/>
            <HeroText>
                <h1>Our Work</h1>
                <p>Explore a curated selection of our most successful projects. Each case study reflects our commitment to excellence and innovation in the digital marketing space.</p>
                <hr/>
            </HeroText>
            <GridContainer>
                <Grid>
                    <ImageContainer buttonText="SEO" image="src/assets/placeholder.jpeg"/>
                    <ImageContainer buttonText="Social Media" image="src/assets/placeholder.jpeg"/>
                    <ImageContainer buttonText="Content" image="src/assets/placeholder.jpeg"/>
                    <ImageContainer buttonText="PPC" image="src/assets/placeholder.jpeg" height="520px" width ="520px" colSpan ={2} rowSpan={2}/>
                    <ImageContainer buttonText="Branding" image="src/assets/placeholder.jpeg" height="520px" rowSpan={2}  />
                </Grid>
            </GridContainer>
            <ContactUsCTA>
                <h1>Let's Build Your Vision</h1>
                <p>Ready to see the results like these? Contact us toady to discuss your project and get a personalized quote</p>
                <button>Start Your Project</button>
            </ContactUsCTA>
        <Footer/>

    </PageContainer>

    
  )
}

export default Portfolio;