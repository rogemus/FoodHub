FROM node:11
RUN mkdir /code
COPY . /code/
WORKDIR /code
RUN npm install
RUN npm run build
RUN npm install -g serve
