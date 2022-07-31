FROM node:16-alpine


WORKDIR /user/app

RUN corepack enable

COPY package.json .
COPY yarn.lock .
RUN yarn install --quiet
COPY . .