FROM node:12-alpine as build

WORKDIR /app

COPY gatsby-config.js .
COPY jest ./jest
COPY jest.config.js .
COPY package.json ./
COPY package-lock.json ./
COPY src ./src
COPY static ./static
COPY tsconfig.json .

RUN npm install
RUN npm run postinstall
RUN npm test
RUN npm run build


FROM nginx:alpine as release

WORKDIR /app

COPY --from=build /app/public ./
COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY conf/default.conf /etc/nginx/conf.d/default.conf
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80
ENTRYPOINT /usr/sbin/nginx -g 'daemon off;'
