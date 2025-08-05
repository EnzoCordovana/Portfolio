# apps/frontend/Dockerfile
FROM node:20

WORKDIR /usr/apps/frontend/src

COPY package.json package-lock.json ./

COPY . .

RUN npm i


EXPOSE 5173

CMD ["npm", "run", "dev"]