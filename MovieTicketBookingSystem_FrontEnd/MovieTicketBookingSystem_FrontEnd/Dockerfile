# Stage 1: Build the Angular app
FROM node:18-alpine AS build-step

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps


COPY . .
RUN npm run build --prod

# Stage 2: Serve app with Nginx
FROM nginx:stable-alpine

COPY --from=build-step /app/dist/ticket_booking_app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]







