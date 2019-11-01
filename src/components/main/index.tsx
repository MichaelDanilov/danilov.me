import React from 'react';

import Paragraph from '../paragraph';
import data from '../../data/index';

import Languages from '../../constants/languages';

const Main = ({ lang = Languages.english }: IProps) => (
  <Paragraph paragraphs={data.content[lang]} />
);

interface IProps {
  lang: Languages;
}

export default Main;
