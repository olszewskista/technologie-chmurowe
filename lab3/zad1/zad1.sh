#!/bin/bash

echo "<html><body><h1>$1</h1></body></html>" > index.html

docker run -d -p 80:80 -v ./index.html:/usr/share/nginx/html/index.html nginx
