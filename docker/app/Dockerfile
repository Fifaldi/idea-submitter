FROM node:16

# WORKDIR /app
# RUN npm install

WORKDIR /usr/local/app

RUN corepack enable

COPY src ./src

# COPY package.json /app/
# COPY yarn.lock /app/
RUN echo "$PWD"
RUN ls /usr/local/app/src/
# RUN yarn install