import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 1.5rem 0;
  background: transparent;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  font-size: 0.9rem;

  a {
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #fc31a4;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Designed with ♥️ by{" "}
        <a
          href="https://inkstellar.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inkstellar
        </a>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
