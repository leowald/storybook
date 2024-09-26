# Select reference image
FROM node:20.10.0

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /usr/src/app



# Copy project files into the docker image
COPY . .

RUN apt-get update && apt-get install -y xdg-utils

# Install app dependencies
RUN npm set progress=false && npm install

# Make port 8086 available
EXPOSE 6006

# run storybook app
CMD ["npm", "run", "storybook"]

