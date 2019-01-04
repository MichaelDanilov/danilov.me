import * as React from "react";
import Helmet from "react-helmet";

import Header from "../header";
import Layout from "../layout";
import Navigation from "../navigation";
import Page from "../page";

import defaultMeta from "../../data/meta";
import navigation from "../../data/navigation";

import { ENGLISH } from "../../constants/languages";

// eslint-disable-next-line object-curly-newline
const PageWrapper: React.SFC<IProps> = ({ children, headerAbout = "", meta = {}, lang = ENGLISH }) => {
  const nav = navigation[lang];
  const resultMeta = {
    ...{
      description: defaultMeta.description[ENGLISH],
      keywords: defaultMeta.keywords[ENGLISH],
    },
    ...meta,
    ...{
      title: meta.title ? `${meta.title} - ${defaultMeta.title[ENGLISH]}` : defaultMeta.title[ENGLISH],
    },
  };

  const helmetMeta = [
    { name: "description", content: resultMeta.description },
    { name: "keywords", content: resultMeta.keywords },
  ];

  return (
    <Layout>
      <Helmet
        title={resultMeta.title}
        meta={helmetMeta}
      >
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
}

export default PageWrapper;
