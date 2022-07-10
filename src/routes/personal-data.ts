import { Router } from '@definitions'

export const personalDataRoute: Router = (fastify, opts, done) => {
  fastify.get('/', () => {})

  done()
}
