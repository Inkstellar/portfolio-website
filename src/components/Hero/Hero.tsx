import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface FloatingElementProps {
  size?: number;
  color?: string;
}

interface StyledElementProps extends FloatingElementProps {
  size: number;
  color?: string;
}
const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 1000px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--primary-color);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;
  border: none;
`;

const SecondaryButton = styled(Button)`
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  background: transparent;
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  &::before {
    content: "";
    width: 2px;
    height: 40px;
    background-color: var(--primary-color);
    display: block;
    margin: 0 auto;
    animation: scroll 1.5s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      transform: scaleY(0);
      transform-origin: top;
    }
    50% {
      transform: scaleY(1);
      transform-origin: top;
    }
    50.1% {
      transform: scaleY(1);
      transform-origin: bottom;
    }
    100% {
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  z-index: 0;
`;

const Circle = styled(FloatingElement)<StyledElementProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background: ${(props) => props.color};
  opacity: 0.1;
`;

const Square = styled(FloatingElement)<StyledElementProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  opacity: 0.1;
  border-radius: 8px;
  transform: rotate(45deg);
`;

const FloatingIcon = styled(FloatingElement)<StyledElementProps>`
  font-size: ${(props) => props.size}px;
  color: var(--primary-color);
  opacity: 0.15;
`;

const Highlight = styled.span`
  color: var(--primary-color);
`;

const Hero: React.FC = () => {
  const floatingElements = [
    {
      type: "circle",
      size: 60,
      color: "var(--primary-color)",
      initial: { x: -100, y: -50 },
      animate: {
        x: [-100, -80, -100],
        y: [-50, -30, -50],
        rotate: [0, 180, 360],
      },
    },
    {
      type: "square",
      size: 40,
      color: "var(--primary-color)",
      initial: { x: 150, y: 100 },
      animate: {
        x: [150, 170, 150],
        y: [100, 120, 100],
        rotate: [45, 225, 405],
      },
    },
    {
      type: "icon",
      content: "⚡",
      size: 40,
      initial: { x: -150, y: 150 },
      animate: {
        x: [-150, -130, -150],
        y: [150, 170, 150],
        rotate: [0, -180, -360],
      },
    },
    {
      type: "icon",
      content: "🎨",
      size: 50,
      initial: { x: 200, y: -100 },
      animate: {
        x: [200, 220, 200],
        y: [-100, -80, -100],
        rotate: [0, 180, 360],
      },
    },
    {
      type: "circle",
      size: 30,
      color: "var(--primary-color)",
      initial: { x: 100, y: 200 },
      animate: {
        x: [100, 120, 100],
        y: [200, 220, 200],
        rotate: [0, -180, -360],
      },
    },
  ];

  return (
    <HeroSection>
      {floatingElements.map((element, index) => {
        const commonProps = {
          initial: element.initial,
          animate: element.animate,
          transition: {
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          key: index,
        };

        switch (element.type) {
          case "circle":
            return (
              <Circle
                {...commonProps}
                size={element.size}
                color={element.color}
              />
            );
          case "square":
            return (
              <Square
                {...commonProps}
                size={element.size}
                color={element.color}
              />
            );
          case "icon":
            return (
              <FloatingIcon {...commonProps} size={element.size}>
                {element.content}
              </FloatingIcon>
            );
          default:
            return null;
        }
      })}
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crafting Digital <Highlight>Experiences</Highlight>
          <br />
          That People Love
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          UX Designer turning complex problems into elegant, user-friendly
          solutions
        </Subtitle>
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <PrimaryButton
            href="https://www.behance.net/inkstellar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View on Behance
          </PrimaryButton>
          <SecondaryButton
            as={Link}
            to="/about-me"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Resume
          </SecondaryButton>
        </ButtonContainer>
      </HeroContent>
      <ScrollDown
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </HeroSection>
  );
};

export default Hero;
