#!/bin/bash

docker network create --driver bridge --subnet 192.168.1.0/24 --gateway 192.168.1.1 my_bridge

docker run -d --name moj_kontener --network=my_bridge busybox sleep 3600

docker network inspect my_bridge