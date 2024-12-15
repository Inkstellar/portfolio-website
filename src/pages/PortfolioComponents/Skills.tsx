import React from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "./styledComponents";

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;

  @media print {
  display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    grid-template-columns: repeat(2, 1fr);
    gap: 4pt;
  }
`;

const SkillItem = styled.div.attrs({ className: 'skill-item' })`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media print {
    font-size: 9pt;
  }
`;

const SkillName = styled.span.attrs({ className: 'skill-name' })`
  font-weight: 400;
`;

function Skills() {
  const skills = [
    { name: "Design Systems", rating: 5 },
    { name: "Branding", rating: 5 },
    { name: "User Centric Design", rating: 5 },
    { name: "Interactive Mock-ups", rating: 4 },
    { name: "User Interface Design", rating: 5 },
    { name: "Manage UI Library", rating: 4 },
    { name: "Rapid Prototyping", rating: 4 },
    { name: "Design to Code", rating: 4 },
    { name: "Strategic Planning", rating: 4 },
    { name: "Process Optimization", rating: 4 },
    { name: "Team Management", rating: 4 }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <span className="star-rating">
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </span>
  );

  return (
    <Section>
      <SectionTitle>SKILLS</SectionTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillName>{skill.name}</SkillName>
            <StarRating rating={skill.rating} />
          </SkillItem>
        ))}
      </SkillsGrid>
    </Section>
  );
}

export default Skills;
