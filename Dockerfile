# app build
FROM node:22-alpine AS app-build

WORKDIR /app

COPY package.json package-lock.json ./

RUN ls -la /app

RUN npm ci

COPY . .

RUN npm run build

# runtime
FROM app-build AS runtime

WORKDIR /app

COPY . .
COPY --from=app-build /app/node_modules ./node_modules
COPY --from=app-build /app/.next ./.next

EXPOSE 3000

CMD ["npm", "run", "start"]