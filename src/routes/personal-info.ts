import { FindOneUserPersonalInfo } from '@controllers'
import { Router } from '@definitions'

export const personalDataRoute: Router = (fastify, opts, done) => {
  fastify.get('/:dni', FindOneUserPersonalInfo)

  done()
}
