#!/bin/bash

docker volume create nginx_data

docker run -d --name nginx -p 80:80 -v nginx_data:/usr/share/nginx/html nginx