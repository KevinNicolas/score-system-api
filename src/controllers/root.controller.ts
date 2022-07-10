import { Controller } from '@definitions'

export const RootGet: Controller = async (request, reply) => {
  reply.status(200).send({ status: 'All ok!' })
}
