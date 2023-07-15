import 'dotenv/config'
import { app } from './app'
import { env } from './config/env'

const start = async () => {
  try {
    await app.listen({
      port: env.PORT,
    })

    app.log.info(`Server listening on port ${env.PORT}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
