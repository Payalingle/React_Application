# # Dockerfile

# # Stage 1: Build React app
# FROM node:18 as build
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

# # Stage 2: Serve with Nginx
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Use Node 20 (LTS) for build stage
# FROM node:20 as build

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Use nginx for serving the production build
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:18-alpine AS builder
RUN apk update && apk add --no-cache libxml2
WORKDIR /app
COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .
RUN npm run build
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



