import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";

const DesignWorksContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 64px auto 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  &:hover {
    transform: translateY(-5px);
    .overlay {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.5;
`;

const BehanceEmbed = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;
const BehanceOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const BehanceLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: 2px solid white;
  border-radius: 50px;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: var(--primary-color);
  }
`;
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  behanceLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ratings & Feedback",
    description:
      "A user-friendly ratings and feedback system designed to enhance customer engagement and improve service quality.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/974872122828355.60e21c2d16c69.png",
    behanceLink:
      "https://www.behance.net/gallery/122828355/Ratings-Feedback-UI",
  },
  {
    id: 2,
    title: "Download Freebie Pop-up",
    description:
      "This is a simple popup to make the user submit their id before they can download free resources.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/990521122825845.60e20f85e2b5e.png",
    behanceLink: "https://www.behance.net/gallery/122825845/Popup-component",
  },
  {
    id: 3,
    title: "Leaderboard UI",
    description:
      "This is a leaderboard UI design concept aimed at presenting rankings and scores in a visually appealing and user-friendly manner.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2b4ec9122826445.60e216c138d3f.png",
    behanceLink: "https://www.behance.net/gallery/122826445/Leaderboard-UI",
  },
];

const DesignWorks: React.FC = () => {
  return (
    <>
      <Header />
      <DesignWorksContainer>
        <Title>Design Portfolio</Title>
        <Description>
          Explore my collection of UX/UI design projects, focusing on creating
          intuitive and visually appealing interfaces for financial services and
          data management platforms. Each project demonstrates my approach to
          solving complex design challenges while maintaining user-centric
          principles.
        </Description>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <BehanceOverlay className="overlay">
                <BehanceLink
                  href={project.behanceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check project on Behance
                </BehanceLink>
              </BehanceOverlay>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        <ProjectCard>
          <ProjectContent>
            <ProjectTitle>Project Management tool</ProjectTitle>
            <ProjectDescription>
              Concept of a project management tool designed to streamline
              workflows, enhance team collaboration, and provide insightful
              analytics for better decision-making.
            </ProjectDescription>
          </ProjectContent>
        </ProjectCard>
        <BehanceEmbed>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f1daf795595511.5e9b2a61932ba.png"
            alt="Behance Project"
          />
          <BehanceOverlay className="overlay">
            <BehanceLink
              href="https://www.behance.net/gallery/95595511/Dashboard-for-Task-Management"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check project on Behance
            </BehanceLink>
          </BehanceOverlay>
        </BehanceEmbed>
      </DesignWorksContainer>
    </>
  );
};

export default DesignWorks;
