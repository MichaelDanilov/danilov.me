import * as React from 'react';
import styled from 'styled-components';

import Paragraph from '../../components/paragraph';
import data from '../../data/error';

import { ENGLISH } from '../../constants/languages';

const Error: React.SFC<Props> = ({ lang = ENGLISH }) => (
  <Paragraph paragraphs={data.content[lang]} />
);

interface Props {
  lang: string,
};

export default Error;
