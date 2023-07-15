import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.number().default(3333),
})

const schemaRes = envSchema.safeParse(process.env)

if (!schemaRes.success) {
  throw new Error(`Invalid environment variables: ${schemaRes.error.message}`)
}

export const env = schemaRes.data
