# danilov.me

Source of personal website of [Michael Danilov](https://danilov.me).

## usage

### install dependencies

```bash
nvm use && \
npm run clean && \
npm i
```

### start local server (after installing dependencies)

```bash
npm start
```

### build to static (after installing dependencies)

```bash
npm run build
```

### start local docker image

```bash
docker build -t danilov.me . && docker run -p 8080:80 danilov.me:latest
```
