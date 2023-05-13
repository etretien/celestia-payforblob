FROM node:18.12-alpine as builder

WORKDIR /app
COPY . .

ARG NEXT_PUBLIC_API_URL

RUN npm ci
RUN ./node_modules/.bin/next build


CMD ["npm", "start"]
