#!/bin/bash

echo "Docker exited containers"
docker ps -aq -f status=exited

echo "Remove stopped Docker containers"
docker ps -aq --no-trunc -f status=exited | xargs docker rm

echo "Remove dangling/untagged Docker images"
docker images -q --filter dangling=true | xargs docker rmi

echo "Remaining Docker images"
docker images
