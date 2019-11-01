FROM node:12-alpine as build

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


FROM nginx:1.17-alpine as release

WORKDIR /app

COPY --from=build /app/public ./
COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY conf/default.conf /etc/nginx/conf.d/default.conf
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80
ENTRYPOINT /usr/sbin/nginx -g 'daemon off;'
