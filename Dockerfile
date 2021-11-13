FROM node:16.2.0-alpine3.13

RUN apk add --no-cache libc6-compat

RUN yarn install && npm -v

WORKDIR /home/nextjs/app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY package.json yarn.lock ./

RUN chown -R nextjs:nodejs /home/nextjs

USER nextjs

RUN yarn install

COPY . .

RUN yarn build

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD [ "yarn", "start" ]
