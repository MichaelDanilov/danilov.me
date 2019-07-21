# danilov.me

Source of personal website of [Michael Danilov](https://danilov.me).

## usage

### install dependencies

```bash
nvm use && \
npm run clean && \
npm i &&
rm -rf node_modules/gatsby/node_modules/graphql &&
ln -s node_modules/graphql node_modules/gatsby/node_modules/graphql
```

### start local server (after installing dependencies)

```bash
npm start
```

### build to static (after installing dependencies)

```bash
npm run build
```
