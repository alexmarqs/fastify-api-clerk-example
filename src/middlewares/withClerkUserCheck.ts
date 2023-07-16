import { preHandlerHookHandler } from 'fastify'
import { getAuth } from '@clerk/fastify'
import createHttpError from 'http-errors'

export const withClerkUserCheck: preHandlerHookHandler = (
  request,
  _reply,
  done,
) => {
  const { userId } = getAuth(request)

  if (!userId) {
    throw new createHttpError.Unauthorized()
  }

  request.userId = userId

  done()
}
