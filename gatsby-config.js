const { default: michaeldanilov } = require('michaeldanilov');

const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    siteUrl: michaeldanilov.homepage,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: pkg.name,
        short_name: pkg.name,
        description: pkg.description,
        lang: 'en-US',
        display: 'standalone',
        icon: './src/static/avataaars.png',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#3273dc',
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
