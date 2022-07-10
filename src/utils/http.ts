import { ControllerFn } from '@definitions'
import { FastifyRequest } from 'fastify'

export const defineController: ControllerFn = (fn) => async (request, reply) => {
  return await fn(
    request,
    (replyInfo, status = 200) => reply.status(status).send({ ...replyInfo }),
    (err: unknown) => {
      const { status, error } = err as { status: number; error: unknown }
      if (status && error) return reply.status(status).send({ error })
      return reply.status(500).send({ error: 'Unexpected error, see logs for more information' })
    }
  )
}
