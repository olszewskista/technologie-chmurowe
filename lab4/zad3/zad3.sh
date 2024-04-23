#!/bin/bash

volumes=$(docker volume ls --format '{{.Name}}')

for volume in $volumes
do
    usage=`docker run --rm -v $volume:/data alpine sh -c "df -h /data" | tail -1 | tr -s ' ' | cut -d ' ' -f 5`
    echo "Zużycie przestrzeni dyskowej dla $volume to $usage"
done