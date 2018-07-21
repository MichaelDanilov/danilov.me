import * as React from 'react';

import './styles';

const Layout = ({ children }: Props) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

interface Props {
  children: any
};

export default Layout;
