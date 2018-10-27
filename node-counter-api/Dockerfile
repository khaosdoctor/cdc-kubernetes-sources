FROM node:10-alpine
ADD . /src

WORKDIR /src
RUN ["npm", "i"]

ENTRYPOINT [ "npm", "start" ]