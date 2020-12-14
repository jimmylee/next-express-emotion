# required: build system
FROM node:14-alpine

# environment
ARG NODE_ENV=production
ARG PORT=8080
ENV NODE_ENV ${NODE_ENV}
WORKDIR /service

# build
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

WORKDIR /service
COPY . .
RUN npm run build

EXPOSE ${PORT}
CMD npm run start
