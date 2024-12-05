import { styled } from "styled-components";

export const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PHeader = styled.div`
  margin-bottom: 2rem;
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #1a1a1a;
`;

export const Title = styled.h2`
  color: #4285f4;
  margin: 0.5rem 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 1rem;
  color: #666;
  margin: 1rem 0;
`;

export const Section = styled.section`
  margin: 2rem 0;
`;

export const SectionTitle = styled.h3`
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  color: #333;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

export const Skill = styled.div`
  padding: 0.5rem;
  background: #f5f5f5;
  border-radius: 4px;
`;

export const ExperienceItem = styled.div`
  margin: 1.5rem 0;
`;

export const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const StarContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`;

export const Star = styled.span<{ filled: boolean }>`
  color: ${(props) => (props.filled ? "#FFD700" : "#D3D3D3")};
  font-size: 20px;
  cursor: default;
`;

export const ToolItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  strong {
    font-size: 16px;
    color: #333;
  }
`;

export const ProgressBar = styled.div<{ value: number }>`
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.value}%;
    background: #4285f4;
    border-radius: 4px;
  }
`;
