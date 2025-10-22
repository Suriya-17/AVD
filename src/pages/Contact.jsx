import React from "react";
import styled from "styled-components";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

import CommonHero from "../components/CommonHero";
import { HeroData } from "../data";

const Section = styled.section`
    background-color: #121212;
    color: #fff;
    min-height: 100vh;
    padding: 5rem 2rem;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    max-width: 1100px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`;

const FormBox = styled.div`
    background-color: #1b1b1b;
    border: 1px solid rgba(255, 115, 0, 0.5);
    border-radius: 12px;
    padding: 2.5rem;
    box-shadow: 0 0 30px rgba(255, 115, 0, 0.08);
`;

const Title = styled.h2`
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
    color: #fff;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

const Label = styled.label`
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    color: #ccc;
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
`;

const Input = styled.input`
    width: 100%;
    background-color: #0e0f11;
    border: none;
    border-radius: 6px;
    padding: 0.9rem;
    font-size: 0.95rem;
    color: #eaeaea;
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    outline: none;
    transition: 0.3s;
    border: 1px solid transparent;

    &:focus {
        border: 1px solid #ff7300;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    background-color: #0e0f11;
    border: none;
    border-radius: 6px;
    padding: 0.9rem;
    font-size: 0.95rem;
    color: #eaeaea;
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    resize: none;
    min-height: 120px;
    outline: none;
    border: 1px solid transparent;

    &:focus {
        border: 1px solid #ff7300;
    }
`;

const Button = styled.button`
    background-color: #ff7300;
    border: none;
    color: #fff;
    font-weight: 600;
    padding: 0.9rem;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 0.8rem;

    &:hover {
        background-color: #ff8a33;
    }
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const InfoTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    color: #fff;
`;

const InfoText = styled.p`
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    color: #bbb;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
`;

const InfoItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.2rem;
`;

const Icon = styled.div`
    font-size: 1.2rem;
    color: #ff7300;
    margin-right: 0.8rem;
    margin-top: 0.3rem;
`;

const InfoLabel = styled.h4`
    font-family: ${({ theme }) => theme.fonts.headingFont};
    font-size: 1rem;
    color: #fff;
    margin-bottom: 0.2rem;
`;

const InfoDetail = styled.p`
    font-family: ${({ theme }) => theme.fonts.secondaryFont};
    color: #ddd;
    font-size: 0.95rem;
`;

const SocialWrapper = styled.div`
    margin-top: 2rem;
`;

const SocialTitle = styled.h4`
    font-family: ${({ theme }) => theme.fonts.headingFont};
    margin-bottom: 1rem;
    color: #fff;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 1.2rem;

    a {
        color: #fff;
        font-size: 1.2rem;
        transition: 0.3s;

        &:hover {
            color: #ff7300;
        }
    }
`;


const Contact = () => {
    return (
        <>
            <CommonHero data = {HeroData.contactData} />
            <Section id="contact">
                <Container>
                    {/* Left: Form */}
                    <FormBox>
                        <Title>Get in Touch</Title>
                        <Form>
                            <div>
                                <Label>Full Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <Label>Email Address</Label>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <Label>Subject</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter subject"
                                />
                            </div>
                            <div>
                                <Label>Message</Label>
                                <TextArea placeholder="Write your message..." />
                            </div>
                            <Button type="submit">Send Message</Button>
                        </Form>
                    </FormBox>

                    {/* Right: Info */}
                    <InfoBox>
                        <InfoTitle>Contact Information</InfoTitle>
                        <InfoText>
                            Find us at our office or drop us a line through
                            email or phone. We're always happy to connect.
                        </InfoText>

                        <InfoItem>
                            <Icon>
                                <FiMapPin />
                            </Icon>
                            <div>
                                <InfoLabel>Our Office</InfoLabel>
                                <InfoDetail>
                                    123 Digital Avenue, Tech City, 45678
                                </InfoDetail>
                            </div>
                        </InfoItem>

                        <InfoItem>
                            <Icon>
                                <FiMail />
                            </Icon>
                            <div>
                                <InfoLabel>Email Us</InfoLabel>
                                <InfoDetail>
                                    sriarjundigital@gmail.com
                                </InfoDetail>
                            </div>
                        </InfoItem>

                        <InfoItem>
                            <Icon>
                                <FiPhone />
                            </Icon>
                            <div>
                                <InfoLabel>Call Us</InfoLabel>
                                <InfoDetail>+91 6379180730</InfoDetail>
                            </div>
                        </InfoItem>

                        <SocialWrapper>
                            <SocialTitle>Follow Us</SocialTitle>
                            <SocialIcons>
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                                <a href="#">
                                    <FaGithub />
                                </a>
                            </SocialIcons>
                        </SocialWrapper>
                    </InfoBox>
                </Container>
            </Section>
        </>
    );
};

export default Contact;
