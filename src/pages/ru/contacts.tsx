import * as React from 'react';

import Contacts from '../../components/contacts';
import PageWrapper from '../../components/page-wrapper';

import data from '../../data/contacts';

import { RUSSIAN as LANG } from '../../constants/languages';

const ContactsRuPage: React.SFC = () => (
  <PageWrapper
    meta={{ title: data.meta.title[LANG] }}
    lang={LANG}
    url="/contacts"
  >
    <Contacts lang={LANG} />
  </PageWrapper>
);

export default ContactsRuPage;
