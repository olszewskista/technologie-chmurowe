ARG PYTHON_VERSION
FROM python:${PYTHON_VERSION}

COPY ./myapp /app

WORKDIR /app

RUN pip install -r requirements.txt

CMD [ "python", "app.py" ]