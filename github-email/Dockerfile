FROM node:7.2.1

RUN apt-get install libssl-dev

COPY . /root
WORKDIR /root

RUN npm install

CMD npm start

EXPOSE 8888
