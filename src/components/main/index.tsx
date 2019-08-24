import React from 'react';

import Paragraph from '../paragraph';
import data from '../../data/index';

import { ENGLISH } from '../../constants/languages';

const Main = ({ lang = ENGLISH }: IProps) => (
  <Paragraph paragraphs={data.content[lang]} />
);

interface IProps {
  lang: string;
}

export default Main;
