import Fastify from 'fastify'
import { defineRoutes } from '@routes'

export const app = () => {
  let fastify = Fastify()

  defineRoutes(fastify)
  fastify.listen({ port: Number(process.env.PORT || 3000) }, (err, address) => {
    if (err) throw err
    console.log(`Server listening at ${address}`)
  })
}
