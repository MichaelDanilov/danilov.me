import * as React from 'react';
import styled from 'styled-components';

import header from '../../data/header';

import { ENGLISH } from '../../constants/languages';

const StyledTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.125;
`;

const StyledAbout = styled.p`
  margin: 1em 0;
  padding: 0;
`;

const Header = ({ about = '', lang = ENGLISH }: IProps) => (
  <>
    <StyledTitle>{header.name[lang]}</StyledTitle>
    {about ? <StyledAbout dangerouslySetInnerHTML={{ __html: about }} /> : null}
  </>
);

interface IProps {
  about?: string;
  lang: string;
}

export default Header;
