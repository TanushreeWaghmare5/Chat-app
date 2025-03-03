# Use Node.js for build step
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy app files and install dependencies
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the built app
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html

# Expose frontend port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
