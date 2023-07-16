import type { FastifyInstance } from 'fastify'
import { clerkPlugin } from '@clerk/fastify'
import { getHelloPrivateHandler } from '@/handlers/getHelloPrivateHandler'
import { withClerkUserCheck } from '@/middlewares/withClerkUserCheck'

export const privateRoutes = async (fastify: FastifyInstance) => {
  fastify.register(clerkPlugin)
  fastify.decorateRequest('userId', '')
  fastify.addHook('preHandler', withClerkUserCheck)

  fastify.get('/hello', getHelloPrivateHandler)
}
