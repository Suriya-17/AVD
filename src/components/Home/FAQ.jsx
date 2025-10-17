import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus, FiX } from "react-icons/fi";
import { faqData } from "../../data";

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
