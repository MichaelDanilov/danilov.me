import * as React from 'react';
import { Link } from 'gatsby';
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

const Navigation: React.SFC<Props> = ({ navigation = [] }) => (
  <StyledNavigationList>
    {navigation.map(({ href, title }) => (
      <StyledNavigationItem key={href}>
        <Link to={href}>{title}</Link>
      </StyledNavigationItem>
    ))}
  </StyledNavigationList>
);

interface INavigation {
  title: string,
  href: string,
};

interface Props {
  navigation?: Array<INavigation>,
};

export default Navigation;
