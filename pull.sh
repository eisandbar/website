#!/bin/bash
cd /home/eisandbar/Desktop/Projects/website
git pull origin main
docker compose up website --build -d