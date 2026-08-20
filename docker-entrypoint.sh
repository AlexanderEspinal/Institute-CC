#!/bin/sh
set -e

echo "Running Prisma migrations..."
cd server && ../server/node_modules/.bin/prisma migrate deploy

echo "Starting server..."
cd /app
exec "$@"
