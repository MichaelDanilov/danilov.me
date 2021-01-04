import React from 'react';
import styled from 'styled-components';

import header from '../../data/header';

import Languages from '../../constants/languages';

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.125;
`;

const StyledAbout = styled.p`
  margin: 1em 0;
  padding: 0;
`;

const Header: React.FC<IProps> = ({ about = '', lang = Languages.english }) => (
  <>
    <StyledTitle>{header.name[lang]}</StyledTitle>
    {about ? <StyledAbout dangerouslySetInnerHTML={{ __html: about }} /> : null}
  </>
);

interface IProps {
  about?: string;
  lang: Languages;
}

export default Header;
