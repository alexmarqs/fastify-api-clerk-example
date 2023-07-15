# Fastify API with Clerk Example

This example shows how to use [Clerk](https://clerk.dev) to add authentication to a [Fastify](https://www.fastify.io/) API.

## Getting started

### Create a Clerk application

1. Create a Clerk application at [https://dashboard.clerk.dev](https://dashboard.clerk.dev)
2. Copy the Client ID and Client API Key
3. Create a `.env` file in the root of the project and add the following:

```
CLERK_FRONTEND_API=https://<your-clerk-subdomain>.on.clerk.dev
CLERK_API_KEY=<your-clerk-api-key>
CLERK_CLIENT_ID=<your-clerk-client-id>
```

### Run the example

1. Install dependencies: `pnpm i`
2. Start the server: `pnpm dev`

### Learn more

- [Clerk documentation](https://docs.clerk.dev)
- [Fastify documentation](https://www.fastify.io/docs/latest/)
