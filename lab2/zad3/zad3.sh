#!/bin/bash

docker run -d -p 27017:27017 --name mongo mongo

docker run -d -v ./:/zad3 -p 8080:8080 --link mongo:mongo node:16 node /zad3/server.js