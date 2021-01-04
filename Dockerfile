FROM node:12-alpine as build

WORKDIR /app

COPY .eslintrc ./.eslintrc
COPY .prettierrc ./.prettierrc
COPY .yaspellerrc ./.yaspellerrc
COPY gatsby-config.js ./gatsby-config.js
COPY jest ./jest
COPY jest.config.js ./jest.config.js
COPY package.json ./package.json
COPY src ./src
COPY static ./static
COPY tsconfig.json ./tsconfig.json
COPY yarn.lock ./yarn.lock

RUN yarn install
RUN yarn lint
RUN yarn test
RUN yarn build


FROM nginx:alpine as release

WORKDIR /app

COPY --from=build /app/public ./public
COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY conf/default.conf /etc/nginx/conf.d/default.conf
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80
ENTRYPOINT /usr/sbin/nginx -g 'daemon off;'
