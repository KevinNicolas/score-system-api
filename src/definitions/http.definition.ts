import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export type Router = (fastify: FastifyInstance, opts: unknown, done: () => void) => void
export type ControllerCallbackFn = (
  request: FastifyRequest,
  done: (replyInfo: Record<string, unknown>, status?: number) => void,
  error: (errorInfo: unknown) => void
) => Promise<void>
export type Controller = (request: FastifyRequest, reply: FastifyReply) => unknown
export type ControllerFn = (fn: ControllerCallbackFn) => Controller
