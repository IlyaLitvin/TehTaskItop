FROM node:12.13-alpine

WORKDIR /app

RUN apk --no-cache add --virtual builds-deps build-base python

COPY package*.json ./

RUN npm install

RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]