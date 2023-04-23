# Production stage
FROM node:16-alpine

WORKDIR /app

# Copy the built app and server files from the build stage
COPY --from=build /app/dist /app/dist
COPY --from=build /app/server/server.js /app/server.js
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

# Expose the ports used by the React app (3000) and the Express server (3001)
EXPOSE 3000
EXPOSE 3001

# Start the React app and the Express server concurrently
CMD ["npm", "run", "start:prod"]
