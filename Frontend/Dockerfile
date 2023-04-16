FROM node

WORKDIR /vkcopy

COPY package.json /vkcopy

RUN yarn

COPY . .


EXPOSE 3000

CMD ["yarn","dev"]