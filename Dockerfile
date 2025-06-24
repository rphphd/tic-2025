# Step 1: Build the React frontend
FROM node:16 AS build

# Set working directory
WORKDIR /frontend

# Copy frontend package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the frontend source code
COPY frontend/ .

# Build the React app for production
RUN npm run build

# Use Node.js LTS as the base image
FROM node:16

# Set the working directory
WORKDIR /backend

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY backend/ .

# Copy the built frontend files from the previous build stage to be served by Express
COPY --from=build /frontend/build /backend/public

# Expose the backend port
EXPOSE 4000

# Start the backend server
CMD ["node", "server.js"]
