# Use a placeholder base image for multi-platform build
FROM --platform=$BUILDPLATFORM node:20 AS builder

# Set the working directory
WORKDIR /app

# Copy the application files
COPY . .

# Install dependencies and build the application
RUN npm install && \
    npm run build

# Start a new stage for the final image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app .

# Expose the port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]