import React from "react";
import styled from "styled-components";

const TeamContainer = styled.section`
    text-align: center;
    padding: 100px 8%;
    background-color: ${(props) => props.theme.colors.backgroundDark};

    h2 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        font-size: 2rem;
        margin-bottom: 10px;
    }

    p {
        color: ${(props) => props.theme.colors.textMuted};
        margin-bottom: 60px;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        justify-content: center;
    }
`;

const MemberCard = styled.div`
    background-color: #0d0f12;
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
    border-radius: 15px;
    padding: 40px 25px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: ${(props) => props.theme.colors.primary};
    }

    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 3px solid ${(props) => props.theme.colors.primary};
        margin-bottom: 15px;
    }

    h3 {
        font-family: ${(props) => props.theme.fonts.headingFont};
        color: ${(props) => props.theme.colors.backgroundLight};
        margin: 10px 0 5px;
    }

    h4 {
        color: ${(props) => props.theme.colors.primary};
        margin-bottom: 15px;
        font-weight: 600;
    }

    p {
        color: ${(props) => props.theme.colors.textMuted};
        font-size: 0.95rem;
    }
`;

function TeamSection() {
    const members = [
        {
            name: "Arjun Patel",
            role: "Founder & CEO",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            desc: "With over a decade of experience in digital marketing, Arjun leads the team with a vision for innovation and a passion for results.",
        },
        {
            name: "Priya Singh",
            role: "Head of Design",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            desc: "Priya's creative genius turns concepts into stunning visuals that are both beautiful and functional.",
        },
        {
            name: "Rohan Mehta",
            role: "Lead Developer",
            img: "https://randomuser.me/api/portraits/men/75.jpg",
            desc: "Rohan is the technical wizard who brings our designs to life, ensuring every website is fast, secure, and perfectly coded.",
        },
    ];

    return (
        <TeamContainer>
            <h2>Meet Our Team</h2>
            <p>The creative minds and strategic thinkers behind our success.</p>

            <div className="team-grid">
                {members.map((member, index) => (
                    <MemberCard key={index}>
                        <img src={member.img} alt={member.name} />
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <p>{member.desc}</p>
                    </MemberCard>
                ))}
            </div>
        </TeamContainer>
    );
}

export default TeamSection;
