# Alpin11 work assignment

## Stack

- [Next.js](https://nextjs.org/)
- [GraphQL](https://graphql.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Tanstack Query](https://tanstack.com/query/latest/)
- [Typescript](https://www.typescriptlang.org/)
  
### Additional libraries

- [React Hook Form](https://react-hook-form.com/) for better form handling
- [Zod](https://zod.dev) for schema validation

## Getting Started

First, install the dependencies and then copy the `.env.example` file to `.env`.

```bash
npm run setup
# or
yarn setup
# or
pnpm setup
# or
cp .env.example .env
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

If the GraphQL Mock API isn't available, you can start a local instance by running:

```bash
npm run local-gql
# or
yarn local-gql
# or
pnpm local-gql
```

Please don't forget to update the `.env` file with the correct URL (`http://localhost:4000`) and restart the dev server!

## Note

You'll find a `chakra-ui.tsx` file in the `components/client` folder. This file is a workaround to be able to use Chakra UI with Next.js SSR. Since the authors of Chakra UI haven't marked their components as client components we couldn't use them in Server Side Rendered pages like [/about]('http://localhost:3000/about'). For more details have a look at Vercel's [documentation](https://beta.nextjs.org/docs/rendering/server-and-client-components#third-party-packages).
