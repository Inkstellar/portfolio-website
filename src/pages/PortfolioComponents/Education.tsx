import React from "react";
import {
  Section,
  SectionTitle,
  ExperienceItem,
  CompanyInfo,
} from "./styledComponents";

function Education() {
  return (
    <Section>
      <SectionTitle>EDUCATION</SectionTitle>
      <ExperienceItem>
        <CompanyInfo>
          <strong>B.Tech Information Technology</strong>
          <span>06/2005 - 04/2009</span>
        </CompanyInfo>
        <div>SSN Institutions</div>
      </ExperienceItem>
    </Section>
  );
}

export default Education;
