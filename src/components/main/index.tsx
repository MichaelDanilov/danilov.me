import * as React from "react";
import styled from "styled-components";

import Paragraph from "../../components/paragraph";
import data from "../../data/index";

import { ENGLISH } from "../../constants/languages";

const Main: React.SFC<IProps> = ({ lang = ENGLISH }) => (
  <Paragraph paragraphs={data.content[lang]} />
);

interface IProps {
  lang: string;
}

export default Main;