#!/bin/bash

docker volume create nodejs_data

docker run --rm -v nodejs_data:/app node bash -c "echo 'Hello, World!' > /app/hello.txt"

docker volume create all_volumes

docker run --rm -v nodejs_data:/from -v all_volumes:/to busybox sh -c "cp -r /from/. /to"

docker run --rm -v nginx_data:/from -v all_volumes:/to busybox sh -c "cp -r /from/. /to"