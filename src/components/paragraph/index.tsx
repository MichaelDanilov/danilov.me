import * as React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.div`
  margin: 0;
  padding: 0;
`;

const StyledContent = styled.p`
  margin: 1em 0;
  padding: 0;
`;

const Paragraph: React.SFC<Props> = ({ paragraphs = [] }) => (
  <StyledParagraph>
    {paragraphs.map(p => <StyledContent dangerouslySetInnerHTML={{ __html: p }} />)}
  </StyledParagraph>
);

interface Props {
  paragraphs: string[],
};

export default Paragraph;
