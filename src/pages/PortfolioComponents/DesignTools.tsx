import React from "react";
import {
  Section,
  SectionTitle,
  Grid,
  StarContainer,
  Star,
  ToolItem,
} from "./styledComponents";

interface Tool {
  name: string;
  rating: number;
}

const tools: Tool[] = [
  { name: "Figma", rating: 5 },
  { name: "Illustrator", rating: 5 },
  { name: "Photoshop", rating: 4 },
  { name: "Indesign", rating: 4 },
];
const frontendTools: Tool[] = [
  { name: "HTML5", rating: 4 },
  { name: "CSS3", rating: 4 },
  { name: "Javascript", rating: 4 },
  { name: "React JS", rating: 4 },
  { name: "Material UI React", rating: 4 },
  { name: "Redux", rating: 3 },
  { name: "Low-code DB", rating: 4 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= rating}>
          ★
        </Star>
      ))}
    </StarContainer>
  );
};

export default function DesignTools() {
  return (
    <Section>
      <SectionTitle>DESIGN TOOLS</SectionTitle>
      <Grid>
        {tools.map((tool) => (
          <ToolItem key={tool.name}>
            <strong>{tool.name}</strong>
            <StarRating rating={tool.rating} />
          </ToolItem>
        ))}
      </Grid>
      <SectionTitle>FRONT-END TOOLS, FRAMEWORKS</SectionTitle>

      <Grid>
        {frontendTools.map((tool) => (
          <ToolItem key={tool.name}>
            <strong>{tool.name}</strong>
            <StarRating rating={tool.rating} />
          </ToolItem>
        ))}
      </Grid>
    </Section>
  );
}
