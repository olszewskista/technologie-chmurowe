#!/bin/bash

docker network create stepik3

docker build -t node-app ./node

docker build -t nginx_stepik ./nginx

docker run --name node-app --network stepik3 -d node-app

docker run --name nginx -d -p 80:80 -p 443:443 --network stepik3 nginx_stepik