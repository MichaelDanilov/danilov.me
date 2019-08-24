FROM node:11-alpine as build

RUN apk update && apk upgrade && apk add git

WORKDIR /app

COPY gatsby-config.js .
COPY jest ./jest
COPY jest.config.js .
COPY package*.json ./
COPY src ./src
COPY static ./static
COPY tsconfig.json .

RUN npm install
RUN rm -rf node_modules/gatsby/node_modules/graphql
RUN ln -s node_modules/graphql node_modules/gatsby/node_modules/graphql
RUN npm test
RUN npm run build


FROM nginx:1.15-alpine as release

WORKDIR /app

COPY --from=build /app/public ./
COPY conf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
