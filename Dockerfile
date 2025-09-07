FROM node:alpine

WORKDIR /usr/app

COPY ./package.json/ ./

RUN npm istall

COPY ./ ./

CMD ["npm", "start"]

