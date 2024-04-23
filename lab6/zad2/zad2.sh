#/bin/bash

docker network create my_network

docker run --network my_network --name db -e MYSQL_ROOT_PASSWORD=123 -d --rm mysql

docker run --network my_network --name web -v ./app:/app -d -p 3000:3000 node bash -c "cd app && npm i && node server.js"