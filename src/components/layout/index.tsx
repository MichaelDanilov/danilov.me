import * as React from "react";

import GlobalStyle from "./styles";

const Layout = ({ children }: IProps) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
);

interface IProps {
  children: any;
}

export default Layout;
