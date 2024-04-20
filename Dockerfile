FROM node:20.11.1

#set the working directory
WORKDIR /app

#copy the package.json and package-lock.json

COPY package*.json ./

#install the dependencies

RUN npm install

#Copy the rest of the files

COPY . .

#Build the Next.js app

RUN npm run build

#Expose the port

EXPOSE 3000

#Run the app

CMD ["npm", "start"]

