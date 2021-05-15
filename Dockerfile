FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

# COPY . /usr/src/app

COPY . .

RUN npm --verbose install

# RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]