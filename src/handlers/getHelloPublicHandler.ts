import { RouteHandler } from 'fastify'

export const getHelloPublicHandler: RouteHandler = (_request, reply) => {
  // Inkove here your business logic / use case / service

  return reply.send({ message: 'Hello public World!' })
}
