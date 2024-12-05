import React from "react";
import styled from "styled-components";
import DesignExpertise from "./PortfolioComponents/DesignExpertise";
import DesignTools from "./PortfolioComponents/DesignTools";
import Education from "./PortfolioComponents/Education";
import Experience from "./PortfolioComponents/Experience";
import Skills from "./PortfolioComponents/Skills";
import Summary from "./PortfolioComponents/Summary";
import PortfolioHeader from "./PortfolioComponents/PortfolioHeader";
import { PortfolioContainer } from "./PortfolioComponents/styledComponents";
import Header from "../components/Header/Header";

const EmptyDiv = styled.div`
  height: 64px;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
  }

  @media print {
    display: none;
  }
`;

const HideOnPrint = styled.div`
  @media print {
    display: none !important;
  }
`;

const PrintStyles = styled.style`
  @media print {
    @page {
      size: A4;
      margin: 20mm;
    }

    body {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    nav,
    footer {
      display: none !important;
    }

    .PortfolioContainer {
      margin: 0 !important;
      padding: 0 !important;
    }

    /* Ensure dark text on light background for better printing */
    * {
      color: black !important;
      background: white !important;
      box-shadow: none !important;
    }

    /* Break sections across pages nicely */
    section {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }
`;

const Portfolio: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <PrintStyles />
      <HideOnPrint>
        <Header />
        <EmptyDiv />
      </HideOnPrint>

      <PortfolioContainer className="PortfolioContainer">
        <PortfolioHeader />
        <Summary />
        <Skills />
        <DesignTools />
        <DesignExpertise />
        <Experience />
        <Education />
      </PortfolioContainer>
      <PrintButton onClick={handlePrint}>Download PDF</PrintButton>
    </>
  );
};

export default Portfolio;
