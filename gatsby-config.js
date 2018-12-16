const package = require('./package.json');

module.exports = {
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
  ],
};
