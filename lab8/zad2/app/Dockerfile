FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

CMD [ "node", "server2.js" ]