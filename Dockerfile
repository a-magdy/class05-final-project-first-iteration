FROM node:8

# EXPOSE 3000
EXPOSE 9009

# COPY package.json package-lock.json /app/
COPY package.json yarn.lock /app/

WORKDIR /app

RUN yarn

COPY . /app

# CMD yarn start & yarn storybook & wait
CMD yarn storybook

