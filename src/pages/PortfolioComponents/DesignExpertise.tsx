import React from "react";
import { Section, SectionTitle, ProgressBar } from "./styledComponents";

function DesignExpertise() {
  return (
    <Section>
      <SectionTitle>INDUSTRY EXPERTISE</SectionTitle>
      <div style={{ marginTop: "1rem" }}>
        <div>
          <div>Data Management</div>
          <ProgressBar value={80} />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div>Finance</div>
          <ProgressBar value={60} />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <div>Product Development</div>
          <ProgressBar value={90} />
        </div>
      </div>
    </Section>
  );
}

export default DesignExpertise;
