# base image
FROM node:12.4.0-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
run npm install react-scripts -g --silent
COPY . .

EXPOSE 80

# start app
CMD ["npm", "start"]