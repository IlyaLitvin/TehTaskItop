FROM node:12.13-alpine

WORKDIR /server/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]