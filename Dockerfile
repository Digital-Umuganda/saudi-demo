FROM node:20.11.1-bullseye-slim 

COPY package*.json ./

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

EXPOSE 5000
CMD ["npm", "start"]