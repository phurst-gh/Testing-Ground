import React from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  text-align: center;
  padding: 5rem 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Homepage = () => {
  const cards = [
    { title: "Card 1", content: "This is the first card content." },
    { title: "Card 2", content: "This is the second card content." },
    { title: "Card 3", content: "This is the third card content." },
    { title: "Card 4", content: "This is the fourth card content." },
  ];

  return (
    <div>
      <HeroSection>
        <HeroTitle>Welcome to Testing Grounds</HeroTitle>
        <HeroSubtitle>Explore features and functionality</HeroSubtitle>
      </HeroSection>

      <CardGrid>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardTitle>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
          </Card>
        ))}
      </CardGrid>
    </div>
  );
};

export default Homepage;