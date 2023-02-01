#!/bin/bash
cd /home/eisandbar/website
git pull origin main
docker compose up website --build -d