# Use the official node.js image
FROM node:14

# Set/create the working directory inside the container
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . ./

# Expose the port that your Express application listens on
EXPOSE 8000

# Start the Node.js application
CMD [ "node", "app.js" ]