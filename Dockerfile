FROM node:16-alpine

# WORKDIR /app
# RUN npm install

WORKDIR /app

RUN corepack enable

COPY package.json /app/
COPY yarn.lock /app/
RUN echo "$PWD"
RUN ls
RUN yarn install