const { default: michaeldanilov } = require('michaeldanilov');

const package = require('./package.json');

module.exports = {
  siteMetadata: {
    siteUrl: michaeldanilov.homepage,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/static/avataaars.png',
        appName: package.name,
        appDescription: package.description,
        developerName: package.author.name,
        developerURL: package.author.url,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#3273dc',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: package.version,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        cacheId: 'danilov.me',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: 'weekly',
              priority: 0.7,
            };
          }),
      },
    },
  ],
};
