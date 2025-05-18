# Step 1: Build the React app
FROM node:18 as build

WORKDIR /app

COPY . .

# Install dependencies (you'll see some warnings due to node version, ignore for now)
RUN npm install

# Build the production files
RUN npm run build

# Step 2: Serve app with Nginx
FROM nginx:alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
