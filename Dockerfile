FROM node:lts-alpine3.20 AS dependencies
WORKDIR /dep
COPY package.json  ./
RUN yarn install --frozen-lockfile
FROM node:lts-alpine3.20 AS builder
WORKDIR /build
ENV NEXT_TELEMETRY_DISABLED=1
COPY . .
COPY --from=dependencies /dep/node_modules ./node_modules
RUN yarn build
FROM node:lts-alpine3.20 AS runner
# Set an environment variable
ARG CI_PROJECT_NAME
ENV PROJECT_NAME=${CI_PROJECT_NAME}
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN apk update && apk upgrade \
    && apk add --no-cache libc6-compat openssl curl \
    && rm -rf /var/cache/apk/*
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /build/.next/standalone ./standalone
COPY --from=builder /build/next.config.js ./standalone/
COPY --from=builder /build/public ./standalone/public
COPY --from=builder /build/.next/static ./standalone/.next/static
COPY --from=builder /build/package.json ./standalone/package.json
EXPOSE 3000
RUN chown -R node:node /app/standalone
USER node
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s CMD curl -f http://$PROJECT_NAME:3000/ || exit 1
CMD ["node", "./standalone/server.js"]