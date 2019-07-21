import * as React from 'react';

import Main from '../../components/main';
import PageWrapper from '../../components/page-wrapper';

import data from '../../data/index';

import { RUSSIAN as LANG } from '../../constants/languages';

const IndexRuPage: React.SFC = () => (
  <PageWrapper meta={{ title: data.meta.title[LANG] }} lang={LANG} url="/">
    <Main lang={LANG} />
  </PageWrapper>
);

export default IndexRuPage;
