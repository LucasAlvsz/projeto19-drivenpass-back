FROM node:18-alpine

WORKDIR /usr/src

COPY . .

EXPOSE 5000

RUN npm install && npm run build

CMD [ "npm", "start" ]