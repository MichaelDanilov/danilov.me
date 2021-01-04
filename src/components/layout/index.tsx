import React from 'react';

import YaMetrika from '../yaMetrika';
import GlobalStyle from './styles';

const Layout: React.FC<IProps> = ({ children }) => (
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
