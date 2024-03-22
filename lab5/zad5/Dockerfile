FROM ubuntu as base

RUN apt update && apt install -y curl 

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash && apt install -y nodejs

COPY ./app /app

WORKDIR /app

RUN npm install && npm run build

FROM nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=base /app/out /app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]