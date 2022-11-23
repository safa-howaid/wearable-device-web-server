FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
COPY client/package.json client/package.json
RUN npm install --silent 
RUN cd client/ && npm install --silent

COPY . .

CMD ./scripts/start.sh 