import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 800px;
`;

const Page: React.FC<IProps> = ({ children }) => (
  <StyledPage>{children}</StyledPage>
);

interface IProps {
  children?: React.ReactNode;
}

export default Page;
