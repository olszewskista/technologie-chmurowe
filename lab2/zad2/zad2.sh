#!/bin/bash

docker run -d -p 8080:8080 -v ./:/lab2 node:14 node /lab2/server2.js