#Specify the base image

#FROM alpine -> comment this  to resolve the npm not found error
 
#Add below line to resolve the npm not found error
FROM node:14-alpine 

# Set WROKDIR to copy the data into WORKDIR instead of into the root folder

WORKDIR /usr/app

# to fix packagejson_error 

COPY ./ ./

# Install depndencies

RUN npm install

# Default  startup commands
CMD ["npm", "start"] 

# When we use this file for [docker build .]  we will get the error npm not found if npm is already not installed on your machine

# Once the image is build when you run docker run container id you will get, npm ERR! enoent ENOENT: no such file or directory, open '/package.json'

# Exposing port to outer world -> docker run -p 8888:9999 70aefe3991c6560855bc2d18b9

# docker run -it kuldeepsrana/simpleweb sh -> to open command prompt inside the container

