import * as React from 'react';

import Paragraph from '../paragraph';
import data from '../../data/error';

import { ENGLISH } from '../../constants/languages';

const Error = ({ lang = ENGLISH }: IProps) => (
  <Paragraph paragraphs={data.content[lang]} />
);

interface IProps {
  lang: string;
}

export default Error;
