import React from 'react';

import PageWrapper from '../components/page-wrapper';
import Paragraph from '../components/paragraph';

import data from '../data/cv';

import { ENGLISH as LANG } from '../constants/languages';

const CvPage: React.FC = () => (
  <PageWrapper meta={{ title: data.meta.title[LANG] }} lang={LANG} url="/cv">
    <Paragraph paragraphs={data.content[LANG]} />
  </PageWrapper>
);

export default CvPage;
