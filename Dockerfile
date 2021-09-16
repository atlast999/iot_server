FROM node:latest
WORKDIR /home/node/server
EXPOSE 3000
CMD ["node","app"]