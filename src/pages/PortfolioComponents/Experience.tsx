import React from "react";
import {
  Section,
  SectionTitle,
  ExperienceItem,
  CompanyInfo,
} from "./styledComponents";

function Experience() {
  return (
    <Section>
      <SectionTitle>EXPERIENCE</SectionTitle>
      <ExperienceItem>
        <CompanyInfo>
          <strong>UX Engineer</strong>
          <span>12/2023 - Current</span>
        </CompanyInfo>
        <div>
          <strong>
            <em>FE fundinfo - Chennai, India</em>
          </strong>{" "}
        </div>
        <ul>
          <li>
            Work closely with product managers, designers, and engineers to
            deliver high-quality products and create Process Optimization for
            front-end development.
          </li>
          <li>
            Create Bespoke solution to Top Tier Asset Management Companies with
            unique requirements.
          </li>
          <li>
            Create Design to Code for reusable components using Low code builder
            tools.
          </li>
          <li>
            Manage Design System & UI library making it scalable and accessible
            for new products to be built in the same platform.
          </li>
          <li>
            Provide support and guidance to junior developers and designers.
          </li>
          <li>
            Create and maintain documentation for design system and UI library.
          </li>
          <li>
            Conduct user research and usability testing to understand user needs
            and pain points and thus improve user experience and interface.
          </li>
        </ul>
      </ExperienceItem>
      <ExperienceItem>
        <CompanyInfo>
          <strong>Product Designer</strong>
          <span>06/2019 - 11/2023</span>
        </CompanyInfo>
        <div>
          <strong>
            <em>FE fundinfo - Chennai, India</em>
          </strong>{" "}
        </div>
        <ul>
          <li>
            Create mockup for end to end solutions for financial products for
            clients who are top tier clients.
          </li>
          <li>
            Created 20+ Working Product Design that are sold to hundreds of
            Asset Management Companies in Europe.
          </li>
          <li>
            Provide rapid prototypes that are interactive and customizable
            branding features.
          </li>
          <li>
            Create Design system in Figma and publish branding documents in
            Zeroheight
          </li>
          <li>Create front-end React components in Storybook.</li>
        </ul>
      </ExperienceItem>

      <ExperienceItem>
        <CompanyInfo>
          <strong>Senior UI Designer</strong>
          <span>09/2014 - 06/2019</span>
        </CompanyInfo>
        <div>
          <strong>
            <em>FE fundinfo - Chennai, India</em>
          </strong>
        </div>
        <ul>
          <li>
            Provided rebranding financial tools/products for more than 100+
            clients.
          </li>
          <li>
            Design and build tools to data management solutions for customized
            process.
          </li>
          <li>Create MVP for financial tool concepts.</li>
          <li>
            Create graphical and vector image assets for financial domain.
          </li>
          <li>Provide solutions to automate front-end design process.</li>
        </ul>
      </ExperienceItem>
    </Section>
  );
}

export default Experience;
