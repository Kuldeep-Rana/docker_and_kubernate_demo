#Step to create a docker file

#1 Use an existing iamge as base image
FROM alpine

#2 Download and install dependencies

RUN apk add --update redis

#3 Tell the image what to do when it start as a container
CMD ["redis-server"]

# Simple build command -> docker build .

# Build command with tag name -> [docker] [build] [-t] [your dockerid/projectname]:[tagname] [.] -> example -> docker build -t kuldeepsrana/redis:latest .