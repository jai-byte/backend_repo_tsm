# Use a Node.js LTS base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code into the container
COPY . .

# Expose the port your application runs on
EXPOSE 5203

# Define the environment variable for production
ENV NODE_ENV=production

# Run the application
CMD ["npm", "start"]
