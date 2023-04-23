# Build stage
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build
# testing

# Production stage
FROM node:16-alpine

WORKDIR /app

# Copy the built app and server files from the build stage
COPY --from=build /app/dist /app/dist
COPY --from=build /app/server.js /app/server.js
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

# Expose the ports used by the React app (3000) and the Express server (3001)
EXPOSE 3000
EXPOSE 3001

# Start the React app and the Express server concurrently
CMD ["npm", "run", "start:prod"]
