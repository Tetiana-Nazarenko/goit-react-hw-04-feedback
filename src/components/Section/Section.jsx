import { SectionStyle } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionStyle>
    <h2>{title}</h2>
    {children}
  </SectionStyle>
);
