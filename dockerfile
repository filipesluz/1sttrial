FROM node:10-alpine

WORKDIR /usr/src/app


COPY package*.json ./

RUN nom install


COPY . .

CMD ["npm", "run","all-unix"]