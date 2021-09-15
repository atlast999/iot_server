FROM node:latest
WORKDIR /home/node/server
EXPOSE 80
CMD ["npm","start"]