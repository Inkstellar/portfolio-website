import React from "react";
import styled from "styled-components";
import DesignExpertise from "./PortfolioComponents/DesignExpertise";
import DesignTools from "./PortfolioComponents/DesignTools";
import Education from "./PortfolioComponents/Education";
import Experience from "./PortfolioComponents/Experience";
import Skills from "./PortfolioComponents/Skills";
import Summary from "./PortfolioComponents/Summary";
import PortfolioHeader from "./PortfolioComponents/PortfolioHeader";

const PrintContainer = styled.div`
  width: 210mm; /* A4 width */
  min-height: 297mm; /* A4 height */
  margin: 0 auto;
  background: white;
  padding: 15mm;
  box-sizing: border-box;

  @media print {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: none;
  }
`;

const PrintGrid = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 0.75rem;
  font-size: 90%;
`;

const PSection = styled.section`
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #eee;
  border-radius: 6px;
  break-inside: avoid;
  page-break-inside: avoid;

  h1 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    color: var(--primary-color);
  }

  h2 {
    font-size: 1.2rem;
    margin: 0.4rem 0;
    color: var(--text-color);
  }

  h3 {
    font-size: 1.1rem;
    margin: 0.3rem 0;
    color: var(--text-color);
  }

  p {
    margin: 0.3rem 0;
    line-height: 1.4;
  }

  ul,
  ol {
    margin: 0.3rem 0;
    padding-left: 1.2rem;
  }

  li {
    margin: 0.2rem 0;
    line-height: 1.3;
  }

  @media print {
    margin: 0;
    padding: 0.4cm;
    border: none;
    h1 {
      margin: 0 !important;
    }

    .star-rating {
      display: none !important;
    }

    .skill-item {
      display: block !important;
      margin-bottom: 0.3rem !important;
    }
  }
`;

const PrintButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }

  @media print {
    display: none;
  }
`;

const GlobalPrintStyles = styled.style`
  @media print {
    @page {
      size: A4;
      margin: 15mm;
      padding:0;
    }

    body {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    li {
      font-size: 8pt !important;
      line-height: 10pt !important;
    }
    nav,
    footer {
      display: none !important;
    }

    .star-rating {
      display: none !important;
    }

    .skill-item {
      display: block !important;
      margin-bottom: 0.3rem !important;
    }

    .skill-name {
      font-weight: 500 !important;
    }
  }
`;

const PrintPortfolio: React.FC = () => {
  const handlePrint = () => {
    window.open('/portfolio-website/KousiganMoni_UX_Portfolio.pdf', '_blank');
  };

  return (
    <>
      <GlobalPrintStyles />
      <PrintButton onClick={handlePrint}>Print Resume</PrintButton>

      <PrintContainer>
        <PrintGrid>
          <div>
            <PSection>
              <PortfolioHeader />
            </PSection>
            <PSection>
              <Summary />
            </PSection>
            <PSection>
              <Experience />
            </PSection>
            
          </div>

          <div>
            <PSection>
              <Skills />
            </PSection>
            <PSection>
               <DesignTools />
            </PSection>
            <PSection>
              <DesignExpertise />
            </PSection>
            <PSection>
              <Education />
            </PSection>
          </div>
        </PrintGrid>
      </PrintContainer>
    </>
  );
};

export default PrintPortfolio;
