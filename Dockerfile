FROM node:10-alpine as build

RUN apk update && apk upgrade && apk add git

WORKDIR /app

COPY package*.json ./
COPY gatsby-config.js .
COPY tsconfig.json .
COPY src ./src
COPY static ./static

RUN npm install --only=production
RUN npm run build


FROM nginx:1.15-alpine as release

WORKDIR /app

COPY --from=build /app/public ./
COPY conf/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
