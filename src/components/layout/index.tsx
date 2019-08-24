import * as React from 'react';

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
  children: any;
}

export default Layout;
