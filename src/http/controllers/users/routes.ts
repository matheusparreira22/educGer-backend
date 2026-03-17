import type { FastifyInstance } from 'fastify'
import { create } from './create.js'

export function exampleRoutes(app: FastifyInstance) {
  app.get('/create', create)
}
