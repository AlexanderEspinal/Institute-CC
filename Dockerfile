FROM node:22-alpine AS base
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY client/package.json client/pnpm-lock.yaml client/
COPY server/package.json server/pnpm-lock.yaml server/

RUN pnpm install --frozen-lockfile

# ── Client build ──────────────────────────────────────────────
FROM base AS client-build
COPY client/ client/
RUN pnpm --filter client run build

# ── Server build ──────────────────────────────────────────────
FROM base AS server-build
COPY server/prisma server/prisma/
RUN cd server && npx prisma generate
COPY server/ server/
RUN server/node_modules/.bin/esbuild server/src/index.ts --bundle --platform=node \
    --format=esm --outdir=server/dist --packages=external

# ── Production ────────────────────────────────────────────────
FROM node:22-alpine AS production
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY client/package.json client/pnpm-lock.yaml client/
COPY server/package.json server/pnpm-lock.yaml server/
RUN pnpm install --frozen-lockfile --prod

COPY --from=server-build /app/server/dist server/dist/
COPY --from=client-build /app/client/dist client/dist/

ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000

CMD ["node", "server/dist/index.js"]
