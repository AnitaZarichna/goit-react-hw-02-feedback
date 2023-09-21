import { SectionCss , Title} from "./Section.styled";
import PropTypes, { arrayOf } from 'prop-types';

export const Section = ({ title, children }) => {
    return (
      <SectionCss>
        <Title>{title}</Title>
        {children}
      </SectionCss>
    );
  };
  
  Section.protoTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }