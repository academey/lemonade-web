FROM node:lts

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive

RUN yarn build \
    --non-interactive

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]