FROM node:10-alpine as build

WORKDIR /app

COPY package*.json ./
COPY src ./src
COPY gatsby-config.js .
COPY tsconfig.json .

RUN npm install --only=production
RUN npm run build


FROM node:10-alpine as release

WORKDIR /app

COPY --from=build /app/public ./
RUN npm -g install serve


EXPOSE 8080
CMD ["serve", ".", "-p", "8080"]
