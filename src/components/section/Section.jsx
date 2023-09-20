import { SectionCss , Title} from "./Section.styled";

export const Section = ({ title, children }) => {
    return (
      <SectionCss>
        <Title>{title}</Title>
        {children}
      </SectionCss>
    );
  };
  