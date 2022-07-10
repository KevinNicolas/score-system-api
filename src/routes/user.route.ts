import { Router } from '@definitions'

export const userRoutes: Router = (fastify, opts, done) => {
  fastify.get('/', () => {})

  fastify.post('/', () => {})
  done()
}
