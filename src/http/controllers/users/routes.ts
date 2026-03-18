import type { FastifyInstance } from 'fastify'

export function exampleRoutes(app: FastifyInstance) {
  app.post('/users', async (request, replay) => {
    return replay.status(201).send({})
  })
}
