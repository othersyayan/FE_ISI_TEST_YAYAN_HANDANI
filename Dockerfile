# Use an official Node.js image as the base image
FROM node:18 AS base

WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy all source files
COPY . .

# Build the Next.js app
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Run migrations & start the server
CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && yarn start -H 0.0.0.0"]

