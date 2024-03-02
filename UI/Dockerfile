FROM node:20.11.1-slim
WORKDIR /pp
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5173

CMD ["npm", "start"]