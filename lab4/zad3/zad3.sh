#!/bin/bash

# Pobierz listę punktów montowania dla woluminów Docker
docker_volumes=$(docker volume ls --format '{{.Mountpoint}}')

# Wyświetl zużycie przestrzeni dyskowej dla każdego woluminu w procentach
echo "Zużycie przestrzeni dyskowej woluminów Docker:"
for volume in $docker_volumes; do
    usage=$(df /mnt/wsl/docker-desktop-data/data/docker/volumes/$volume)
    echo "Wolumin: $volume - Zużycie: $usage"
done
