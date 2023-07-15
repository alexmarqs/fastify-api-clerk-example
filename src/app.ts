import fastify from 'fastify'
import { isHttpError } from 'http-errors'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import compress from '@fastify/compress'
import { publicRoutes } from './routes/public-routes'
import { privateRoutes } from './routes/private-routes'

export const app = fastify({
  logger: true,
})

// register plugins
app.register(cors, {
  origin: '*', // TODO: change this to your domain in production
})
app.register(helmet)
app.register(compress)

// register routes
app.register(publicRoutes, { prefix: '/v1/public' })
app.register(privateRoutes, { prefix: '/v1/private' })

// global error handler
app.setErrorHandler((error, _request, reply) => {
  app.log.error(error)

  if (isHttpError(error)) {
    reply.status(error.statusCode).send({
      message: error.message,
    })
    return
  }

  reply.status(500).send({
    message: 'Internal API Error',
  })
})
