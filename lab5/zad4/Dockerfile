FROM alpine

ARG PYTHON_VERSION
ARG PORT

ENV PORT=${PORT}
ENV PYTHON_VERSION=${PYTHON_VERSION}

VOLUME [ "/app" ]

COPY ./app /app

WORKDIR /app

RUN apk update && apk add --no-cache python3 py3-flask

CMD [ "python", "app.py" ]
