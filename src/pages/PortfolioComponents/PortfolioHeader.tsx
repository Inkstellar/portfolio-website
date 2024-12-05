import React from "react";
import { PHeader, Name, Title, ContactInfo } from "./styledComponents";
import styled from "styled-components";

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

function PortfolioHeader() {
  return (
    <PHeader>
      <Name>KOUSIGAN MONI</Name>
      <Title>UI/UX Designer</Title>
      <ContactInfo>
        <ContactLink href="mailto:kousi@live.in">
          <span>✉️ kousi@live.in</span>
        </ContactLink>
        <ContactLink
          href="https://linkedin.com/in/kousiganmoni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>🔗 linkedin.com/in/kousiganmoni</span>
        </ContactLink>
        <span>📍 Tirunelveli</span>
      </ContactInfo>
    </PHeader>
  );
}

export default PortfolioHeader;
