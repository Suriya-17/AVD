import React from 'react';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import ApproachCard from '../../components/Services/ApproachCard';

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
const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundDark};
    padding: 70px 30px;
    gap : 200px;
`

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
    font-family: ${(props) => props.theme.fonts.secondaryFont};

    #small-text{
      color: ${(props) => props.theme.colors.primary};
    }

    h1{
      color: ${(props) => props.theme.colors.backgroundLight};
      font-weight: 700;
      font-family: ${(props) => props.theme.fonts.headingFont};
      font-size: 50px;
    }

    #description{
      font-size: 20px;
    }
  
`
const  Image = styled.img`
     position: relative;
     width: 800px;
     height: 500px;
     border-radius: 12px;
  
`
const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;

    button{
      color: ${props => props.theme.colors.backgroundLight};
      font-weight: bold;
      padding: 8px 20px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    #btn-1{
      background-color: ${props => props.theme.colors.primary};
    }
    #btn-2{
      background-color: ${props => props.theme.colors.backgroundDark};
      border: solid 1px ${props => props.theme.colors.backgroundLight};
    }
`

const SEOApproach = styled.div`
  padding: 70px;
  background-color: ${props => props.theme.colors.backgroundGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    font-family: ${(props) => props.theme.fonts.headingFont};
    font-weight: 400;
    font-size: 40px;
  }

  #sub-text{
    width: 800px;
    text-align: center;
    font-size: 18px;
  }

`

const ApproachCardContainer = styled.div`
  margin: 30px ;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`

const KeyBenefitsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundDark};
    padding: 70px 30px;
    gap : 10px;

`

const KeyBenefitsText = styled.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
    font-family: ${(props) => props.theme.fonts.secondaryFont};
    margin-left:50px ;

    h2{
      font-family: ${(props) => props.theme.fonts.headingFont};
    }

    ul{
      list-style-type: none;
      padding-left: 0;
    }
    p{
      margin: 0;
    }

    li{
      position: relative;
      margin-top: 30px;
      padding-left: 25px;
    }
    .heading{
    font-weight: 650 ;
    position: relative;
    padding-left: 30px; 
    display: flex;
    align-items: center; 
    line-height: normal; 
    margin-bottom: 10px;
    }
    .heading::before {
    
    font-family: 'Material Symbols Outlined', 'Material Icons'; 
    content: 'check_circle'; 
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.primary};
    font-size: 24px; 
    font-weight: bold;
    line-height: 1.5; 
    }


  
`

function Seo() {
  return (
    <PageContainer>
      <Navbar/>
      <HeroContainer>
        <HeroText>
          <p id='small-text'>Our Services</p>
          <h1>Search Engine Optimization</h1>
          <p id='description'>Catapult your brand to the top of search engine results. Our bespoke SEO strategies are designed to increase your organic traffic, enhance online visibility, and drive meaningful conversions. We focus on what truly matters: sustainable growth and a dominant digital footprint.</p>
          <ButtonContainer>
            <button id='btn-1'>Start your SEO Journey</button>
            <button id='btn-2'>View Case Studies</button>
          </ButtonContainer>
        </HeroText>
        <Image src="src/assets/placeholder.png"/>
      </HeroContainer>
      <SEOApproach>
        <h2>Our Comprehensive SEO Approach</h2>
        <p id='sub-text'>We cover all facets of SEO to ensure your digital presence is not just seen, but felt. Our holistic strategy integrates technical precision with creative content and authoritative link
building.</p>
        <ApproachCardContainer>
          <ApproachCard icon="travel_explore" title="Technical SEO" desc="We conduct deep dives into your website's architecture, ensuring search engines can crawl and index your site flawlessly. This includes site speed optimization, mobile-friendliness, and structured data implementation."/>
          <ApproachCard icon="edit_note" title="Content Strategy" desc="Content is king, and we treat it as such. Our team develops compelling, keyword- rich content that not only ranks well but also engages and converts your target audience, establishing you as an industry authority."/>
          <ApproachCard icon="share" title="Link Building" desc="We build high-quality, relevant backlinks to your site, signaling your authority and trustworthiness to search engines. Our outreach is strategic, ethical, and tailored to your niche."/>
        </ApproachCardContainer>
      </SEOApproach>
      <KeyBenefitsContainer>
        <Image src="src/assets/placeholder.png"/>
        <KeyBenefitsText>
          <h2>The Key Benefits of Our SEO Services</h2>
          <ul>
            <li>
              <p className='heading'>Increased Organic Traffic</p>
              <p>Attract a steady stream of highly qualified visitors actively searching
for your products or services.</p>
            </li>
            <li>
              <p className='heading'>Enhanced Brand Credibility</p>
              <p>Ranking high on Google builds trust and positions your brand as a leader in your industry.</p>
            </li>
            <li>
              <p className='heading'>Higher ROI</p>
              <p>SEO is a long-term investment that delivers one of the highest returns compared to other digital marketing channels.</p>
            </li>
            <li>
              <p className='heading'>Improved User Experience</p>
              <p>Our SEO efforts naturally lead to a faster, more intuitive, and user- friendly website.</p>
            </li>
          </ul>
        </KeyBenefitsText>

      </KeyBenefitsContainer>

    </PageContainer>
  )
}

export default Seo;