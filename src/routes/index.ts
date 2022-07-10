import { RootGet } from '@controllers'
import { FastifyInstance } from 'fastify'
import { personalDataRoute } from './personal-info'
import { userRoutes } from './user.route'

export const defineRoutes = (fastify: FastifyInstance) => {
  fastify.get('/', RootGet)

  fastify.register(userRoutes, { prefix: '/users' })
  fastify.register(personalDataRoute, { prefix: '/personal-data' })
}
