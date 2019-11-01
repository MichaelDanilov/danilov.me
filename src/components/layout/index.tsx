import React from 'react';

import YaMetrika from '../yaMetrika';
import GlobalStyle from './styles';

const Layout = ({ children }: IProps) => (
  <>
    <GlobalStyle />
    {children}
    <YaMetrika />
  </>
);

interface IProps {
  children: React.ReactNode;
}

export default Layout;
