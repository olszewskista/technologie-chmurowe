FROM node:alpine

WORKDIR /app

COPY package* .

RUN npm i

COPY . .

CMD [ "node", "server.js" ]