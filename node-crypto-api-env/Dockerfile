FROM node:carbon-alpine
ADD . /src

WORKDIR /src
RUN ["npm", "i"]

ENTRYPOINT [ "npm", "start" ]