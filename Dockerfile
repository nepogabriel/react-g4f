FROM node:22.12.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g json-server

COPY . .

EXPOSE 5173 3000

CMD ["sh", "-c", "json-server --watch ./mock/db.json --port 3000 & npm run dev -- --host"]
