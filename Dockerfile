FROM node:20-bullseye-slim as builder

COPY package*.json ./

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 5000
CMD ["npm", "start"]