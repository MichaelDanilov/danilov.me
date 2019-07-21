import * as React from 'react';
import Helmet from 'react-helmet';

import Header from '../header';
import Layout from '../layout';
import Navigation from '../navigation';
import Page from '../page';

import defaultMeta from '../../data/meta';
import navigation from '../../data/navigation';

import { ENGLISH } from '../../constants/languages';

// eslint-disable-next-line object-curly-newline
const PageWrapper: React.SFC<IProps> = ({
  children,
  headerAbout = '',
  meta = {},
  lang = ENGLISH,
  url = '',
}) => {
  const nav = navigation[lang];
  const resultMeta = {
    ...{
      description: defaultMeta.description[lang],
      keywords: defaultMeta.keywords[lang],
    },
    ...meta,
    ...{
      title: meta.title
        ? `${meta.title} - ${defaultMeta.title[lang]}`
        : defaultMeta.title[lang],
    },
  };

  const helmetMeta = [
    { name: 'description', content: resultMeta.description },
    { name: 'keywords', content: resultMeta.keywords },
  ];

  const alternateLink = [];

  if (url) {
    ['en-US', 'ru-RU'].forEach(fullLangCode => {
      const langCode = fullLangCode.split('-')[0];
      alternateLink.push({
        hreflang: fullLangCode,
        url: langCode === 'en' ? url : `/${langCode}${url}`,
      });
    });
  }

  return (
    <Layout>
      <Helmet>
        <html lang={lang} />
        <title>{resultMeta.title}</title>
        {helmetMeta.map(hMeta => (
          <meta key={hMeta.name} name={hMeta.name} content={hMeta.content} />
        ))}
        {/* tslint:disable jsx-no-multiline-js */}
        {alternateLink.map(aLink => (
          <link
            key={aLink.hreflang}
            rel="alternate"
            hrefLang={aLink.hreflang}
            href={`https://danilov.me${aLink.url}`}
          />
        ))}
        <link type="text/plain" rel="author" href="/humans.txt" />
      </Helmet>
      <Page>
        <Header about={headerAbout} lang={lang} />
        <Navigation navigation={nav} />
        {children}
      </Page>
    </Layout>
  );
};

interface IMeta {
  description?: string;
  keywords?: string;
  title?: string;
}

interface IProps {
  lang: string;
  meta: IMeta;
  children: any;
  headerAbout?: string;
  url?: string;
}

export default PageWrapper;
