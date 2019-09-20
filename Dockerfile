FROM node:8
WORKDIR /src/app

# Install app dependencies
COPY package.json /src/app
RUN npm install

# Copy app contents
COPY . /src/app

# App runs on port 8080
EXPOSE 8080

# Start the app
CMD [ "npm", "start"]