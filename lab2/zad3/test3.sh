#!/bin/bash

x=`curl -I -s http://localhost:8080/ | grep "200 OK"`

if [ -z "$x" ]; then
    echo "Error"
else
    echo "OK"
fi

