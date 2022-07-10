import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export type Router = (fastify: FastifyInstance, opts: unknown, done: () => void) => void
export type Controller = (request: FastifyRequest, reply: FastifyReply) => unknown
