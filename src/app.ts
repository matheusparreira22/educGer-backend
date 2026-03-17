import fastify, { type FastifyReply, type FastifyRequest } from 'fastify'
import { exampleRoutes } from './http/controllers/users/routes.js'

export const app = fastify()

app.register(exampleRoutes)
