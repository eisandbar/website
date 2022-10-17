FROM node:alpine
WORKDIR /website
COPY package.json .
COPY package-lock.json .
RUN npm i && npm i typescript -g
COPY . .
CMD ["npm", "run", "build"]