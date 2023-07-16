import { RouteHandler } from 'fastify'
import { clerkClient } from '@clerk/fastify'
import createHttpError from 'http-errors'

export const getHelloPrivateHandler: RouteHandler = async (request, reply) => {
  // Inkove here your business logic / use case / service
  const user = await clerkClient.users.getUser(request.userId)

  if (!user) {
    throw new createHttpError.NotFound("User doesn't exist")
  }

  return reply.send({
    message: `Hello ${user.firstName} from the private World!`,
  })
}
