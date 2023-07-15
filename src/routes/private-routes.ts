import type { FastifyInstance } from 'fastify'
import { clerkPlugin, getAuth, clerkClient } from '@clerk/fastify'
import createHttpError from 'http-errors'

export const privateRoutes = async (fastify: FastifyInstance) => {
  fastify.register(clerkPlugin)
  fastify.decorateRequest('userId', '')
  fastify.addHook('preHandler', (request, _reply, done) => {
    const { userId } = getAuth(request)

    if (!userId) {
      throw new createHttpError.Unauthorized()
    }

    request.userId = userId

    done()
  })

  fastify.get('/hello', async (request) => {
    const user = await clerkClient.users.getUser(request.userId)

    if (!user) {
      throw new createHttpError.NotFound("User doesn't exist")
    }

    // Do something with the user

    return {
      message: `Hello ${user.firstName} from the private World!`,
    }
  })
}
