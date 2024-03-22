FROM node

COPY ./app /app

WORKDIR /app

RUN npm install

ENV PORT=3000

CMD [ "node", "app.js" ]
