import React from 'react';

import Paragraph from '../paragraph';
import data from '../../data/error';

import Languages from '../../constants/languages';

const Error: React.FC<IProps> = ({ lang = Languages.english }) => (
  <Paragraph paragraphs={data.content[lang]} />
);

interface IProps {
  lang: Languages;
}

export default Error;
