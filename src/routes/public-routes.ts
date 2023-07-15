import type { FastifyInstance } from 'fastify'

export const publicRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/health', async () => {
    return {
      status: 'ok',
    }
  })

  fastify.get('/hello', async () => {
    return {
      message: 'Hello world!',
    }
  })
}
