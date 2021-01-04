# danilov.me

Source of personal website of [Michael Danilov](https://danilov.me).

## usage

### install dependencies

```bash
nvm use && \
yarn clean && \
yarn
```

### start local server (after installing dependencies)

```bash
yarn start
```

### build to static (after installing dependencies)

```bash
yarn build
```

### start local docker image

```bash
docker build -t danilov.me . && docker run -p 8080:80 danilov.me:latest
```
