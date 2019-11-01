import React from 'react';
import Helmet from 'react-helmet';

import Header from '../header';
import Layout from '../layout';
import Navigation, { INavigation } from '../navigation';
import Page from '../page';

import defaultMeta from '../../data/meta';
import navigation from '../../data/navigation';

import Languages from '../../constants/languages';

// eslint-disable-next-line object-curly-newline
const PageWrapper = ({
  children,
  headerAbout = '',
  meta = {},
  lang = Languages.english,
  url = '',
}: IProps) => {
  const nav: INavigation[] = navigation[lang];
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

  const alternateLink: Link[] = [];

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
        {alternateLink.map((aLink: Link) => (
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

interface Link {
  hreflang: string;
  url: string;
}

interface IMeta {
  description?: string;
  keywords?: string;
  title?: string;
}

interface IProps {
  lang: Languages;
  meta: IMeta;
  children: React.ReactNode;
  headerAbout?: string;
  url?: string;
}

export default PageWrapper;
