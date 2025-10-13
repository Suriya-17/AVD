import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus, FiX } from "react-icons/fi";

const FAQSection = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    color: #fff;
    padding: 5rem 2rem;
    text-align: center;
`;

const Title = styled.h2`
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

const Subtitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    color: #ccc;
    max-width: 700px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
`;

const FAQContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const FAQItem = styled.div`
    background-color: ${({ isOpen }) => (isOpen ? "#1b1b1b" : "transparent")};
    border: 1px solid #ff7300;
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 1.5rem;
    text-align: left;
    box-shadow: ${({ isOpen }) =>
        isOpen ? "0 0 10px rgba(255,115,0,0.3)" : "none"};
    transition: all 0.3s ease;
`;

const Question = styled.div`
    font-family: ${({ theme }) => theme.headingFont};
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Answer = styled.p`
    font-family: ${({ theme }) => theme.secondaryFont};
    color: #ddd;
    margin-top: 1rem;
    line-height: 1.6;
    font-size: 1rem;
`;

const IconWrapper = styled.div`
    font-size: 1.3rem;
    color: #ff7300;
`;

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is digital marketing?",
            answer: "Digital marketing is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.",
        },
        {
            question: "How long does it take to see results from SEO?",
            answer: "SEO results typically start to appear within 3 to 6 months depending on your website's domain authority, content quality, and competition in your niche.",
        },
        {
            question: "What is the ROI of social media marketing?",
            answer: "The ROI of social media marketing depends on your goals. It can range from increased engagement and brand awareness to higher conversions and customer loyalty.",
        },
        {
            question: "Do you offer customized digital marketing packages?",
            answer: "Yes, we provide tailored marketing packages designed to match your business goals, target audience, and budget.",
        },
    ];

    return (
        <FAQSection id="faq">
            <Title>Frequently Asked Questions</Title>
            <Subtitle>
                Have questions? We have answers. Find quick solutions to common
                queries about our services and processes.
            </Subtitle>

            <FAQContainer>
                {faqData.map((item, index) => (
                    <FAQItem key={index} isOpen={openIndex === index}>
                        <Question onClick={() => toggleFAQ(index)}>
                            {item.question}
                            <IconWrapper>
                                {openIndex === index ? <FiX /> : <FiPlus />}
                            </IconWrapper>
                        </Question>
                        {openIndex === index && <Answer>{item.answer}</Answer>}
                    </FAQItem>
                ))}
            </FAQContainer>
        </FAQSection>
    );
};

export default FAQ;
