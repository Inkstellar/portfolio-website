import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DesignExpertise from "./PortfolioComponents/DesignExpertise";
import DesignTools from "./PortfolioComponents/DesignTools";
import Education from "./PortfolioComponents/Education";
import Experience from "./PortfolioComponents/Experience";
import Skills from "./PortfolioComponents/Skills";
import Summary from "./PortfolioComponents/Summary";
import PortfolioHeader from "./PortfolioComponents/PortfolioHeader";
import Header from "../components/Header/Header";

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  background: white;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding: 2rem 0;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }
`;

const Section = styled.section`
  background: white;
  color:#333;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  }
  
`;

const NavDots = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;

  @media print {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavDot = styled.button<{ active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.active ? "var(--primary-color)" : "#ddd")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    background: var(--primary-color);
  }
`;

const PrintButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }

  @media print {
    display: none;
  }
`;

const PrintStyles = styled.style`
  @media print {
    @page {
      size: A4;
      margin: 10mm;
    }

    body {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    nav,
    footer,
    ${NavDots} {
      display: none !important;
    }

    ${MainContainer} {
      margin: 0 !important;
      padding: 0 !important;
      max-width: none !important;
      transform: scale(0.9);
      transform-origin: top center;
    }

    ${ContentGrid} {
      display: grid !important;
      grid-template-columns: 2.5fr 1fr !important;
      gap: 1rem !important;
      padding: 0 !important;
    }

    ${Section} {
      padding: 0.25rem !important;
      margin-bottom: 0.75rem !important;
      break-inside: avoid !important;
      page-break-inside: avoid !important;
      box-shadow: none !important;
      border: 1px solid #eee !important;
      border-radius: 6px !important;
      font-size: 90% !important;
    }

    /* Adjust typography for print */
    h1 {
      font-size: 1.5rem !important;
      margin: 0.5rem 0 !important;
    }
    h2 {
      font-size: 1.2rem !important;
      margin: 0.4rem 0 !important;
    }
    h3 {
      font-size: 1.1rem !important;
      margin: 0.3rem 0 !important;
    }
    p {
      margin: 0.3rem 0 !important;
      line-height: 1.4 !important;
    }
    ul,
    ol {
      margin: 0.3rem 0 !important;
      padding-left: 1.2rem !important;
    }
    li {
      margin: 0.2rem 0 !important;
    }

    /* Hide any decorative elements */
    .decorative-element {
      display: none !important;
    }

    /* Ensure good contrast for print */
    * {
      color: black !important;
      background: white !important;
    }

    /* Compact spacing for lists and sections */
    ul li,
    ol li {
 
    }

    /* Adjust grid items for better fit */
    ${ContentGrid} > div > ${Section}:first-child {
      margin-top: 0 !important;
    }
  }
`;

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("header");

  const sections = [
    "header",
    "summary",
    "skills",
    "tools",
    "expertise",
    "experience",
    "education",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id));

      const currentSection = sectionElements.find((section, index) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        const nextSection = sectionElements[index + 1];

        if (!nextSection) {
          return rect.top <= window.innerHeight / 2;
        }

        return (
          rect.top <= window.innerHeight / 2 &&
          nextSection.getBoundingClientRect().top > window.innerHeight / 2
        );
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <PrintStyles />
      <Header />

      <MainContainer>
        <ContentGrid>
          <div>
            <Section id="header" className="print-section">
              <PortfolioHeader />
            </Section>
            <Section id="summary" className="print-section">
              <Summary />
            </Section>
            <Section id="experience" className="print-section">
              <Experience />
            </Section>
            <Section id="education" className="print-section">
              <Education />
            </Section>
          </div>

          <div>
            <Section id="skills" className="print-section">
              <Skills />
            </Section>
            <Section id="tools" className="print-section">
              <DesignTools />
            </Section>
            <Section id="expertise" className="print-section">
              <DesignExpertise />
            </Section>
          </div>
        </ContentGrid>

        <NavDots>
          {sections.map((section) => (
            <NavDot
              key={section}
              active={activeSection === section}
              onClick={() => scrollToSection(section)}
              title={section.charAt(0).toUpperCase() + section.slice(1)}
            />
          ))}
        </NavDots>
      </MainContainer>

      <PrintButton
        onClick={() => (window.location.href = "/portfolio-website/print")}
      >
        <span>📄</span> View Print Version
      </PrintButton>
    </>
  );
};

export default Portfolio;
