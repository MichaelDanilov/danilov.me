import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const StyledNavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavigationItem = styled.li`
  margin: 0;
  margin-left: 20px;
  padding: 0;
  display: inline-block;
  vertical-align: top;

  &:first-child {
    margin-left: 0;
  }
`;

const renderNavigationItem = ({ href = '', title = '', lang }: INavigation) => (
  <StyledNavigationItem key={href}>
    <Link to={href} hrefLang={lang} lang={lang}>
      {title}
    </Link>
  </StyledNavigationItem>
);

const Navigation = ({ navigation = [] }: IProps) => (
  <StyledNavigationList>
    {navigation.map(renderNavigationItem)}
  </StyledNavigationList>
);

interface INavigation {
  title: string;
  href: string;
  lang?: string;
}

interface IProps {
  navigation?: INavigation[];
}

export default Navigation;
