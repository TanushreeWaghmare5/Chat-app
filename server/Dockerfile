# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy app files
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Expose backend port
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
