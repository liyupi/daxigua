ARG NODE_VERSION="15.7-alpine3.10"

FROM node:${NODE_VERSION}

COPY . /daxigua

RUN npm config set registry https://registry.npmmirror.com && \
    npm i -g serve

WORKDIR /daxigua

EXPOSE 5000
ENTRYPOINT [ "serve" ]