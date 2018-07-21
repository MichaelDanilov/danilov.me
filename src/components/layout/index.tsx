import * as React from "react";

import "./styles";

const Layout = ({ children }: IProps) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

interface IProps {
  children: any;
}

export default Layout;
