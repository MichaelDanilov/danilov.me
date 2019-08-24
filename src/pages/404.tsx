import React from 'react';

import Error from '../components/error';
import PageWrapper from '../components/page-wrapper';

import data from '../data/error';

import { ENGLISH as LANG } from '../constants/languages';

const ErrorPage: React.SFC = () => (
  <PageWrapper meta={{ title: data.meta.title[LANG] }} lang={LANG}>
    <Error lang={LANG} />
  </PageWrapper>
);

export default ErrorPage;
