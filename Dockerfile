FROM node:14-alpine as build-step
WORKDIR /app

COPY . .
RUN npm i && npm run ng build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /app/dist/TreasuryMK3-angular .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
