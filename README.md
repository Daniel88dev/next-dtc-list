# Getting Started

Project is opensource, so you can try it by yourself.
But DB records aren't provided, without it you wont be able to search for DTC codes.

## External services

Project is using some services, which you will need to set.
I am using Clerk for authentication. You will need to create a Project there.
Next is DB. I used Neon, but any postgres provider should be fine. 
Lastly (but not needed in dev mode) is Sentry.

## Environment variables

The following env variables are needed, to run in dev you need to create .env.local and enter required values:
```env
SENTRY_AUTH_TOKEN=
POSTGRES_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NODE_ENV=development
```

## Install dependencies

To install all required dependencies run following code in console at your project root directory:
```bash
npm install
```

## Create DB schema

After installing all dependencies, run following command, to create DB tables:
```bash
npm run drizzle-push
```
To insert DB records in to DB tables, you will need have DTC data in following format:
dtc: varchar({ length: 10 }).notNull(),
description: varchar({ length: 200 }),
type: varchar({ length: 50 }),
system: varchar({ length: 50 }),
item: varchar({ length: 50 }),
detail: text("detail"),


## Run project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

