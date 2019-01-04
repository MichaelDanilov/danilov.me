import * as React from "react";
import styled from "styled-components";

const StyledParagraph = styled.div`
  margin: 0;
  padding: 0;
`;

const StyledContent = styled.p`
  margin: 1em 0;
  padding: 0;
`;

const Paragraph: React.SFC<IProps> = ({ paragraphs = [] }) => (
  <StyledParagraph>
    {paragraphs.map((p, i) => <StyledContent key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
  </StyledParagraph>
);

interface IProps {
  paragraphs: string[];
}

export default Paragraph;
