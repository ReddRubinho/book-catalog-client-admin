#stage 1
FROM node:18.12.0 as node
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
#stage 2
FROM nginx:1.17.10-alpine
EXPOSE 4200:80
COPY --from=node /app/dist/book-catalog-client-admin /usr/share/nginx/html


