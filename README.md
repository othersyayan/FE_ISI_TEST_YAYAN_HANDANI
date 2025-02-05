This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the migrations schema:
```bash
npx prisma migrate dev

# and then

npx prisma generate
```

Or you can view full documentation of [Prisma](https://www.prisma.io/docs)


If postgres is can't running on the Docker, you can create your own for the local database.
and here example .env
```
NODE_ENV="dev"
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
```


Second, run the development server:

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
