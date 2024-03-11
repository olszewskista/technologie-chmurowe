#!/bin/bash

cat > default.conf <<EOF
server {
    listen $2;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index index.html;
    }
}
EOF

docker run -d -p $1:$2 -v ./default.conf:/etc/nginx/conf.d/default.conf nginx
