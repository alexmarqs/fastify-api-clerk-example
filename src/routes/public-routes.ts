import { getHelloPublicHandler } from '@/handlers/getHelloPublicHandler'
import type { FastifyInstance } from 'fastify'

export const publicRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/hello', getHelloPublicHandler)
}
