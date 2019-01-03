import * as React from "react";

import YaMetrika from "../yaMetrika";
import GlobalStyle from "./styles";

const Layout = ({ children }: IProps) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
    <YaMetrika />
  </React.Fragment>
);

interface IProps {
  children: any;
}

export default Layout;
