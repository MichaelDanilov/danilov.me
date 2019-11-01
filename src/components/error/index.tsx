import React from 'react';

import Paragraph from '../paragraph';
import data from '../../data/error';

import Languages from '../../constants/languages';

const Error = ({ lang = Languages.english }: IProps) => (
  <Paragraph paragraphs={data.content[lang]} />
);

interface IProps {
  lang: Languages;
}

export default Error;
