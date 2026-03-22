import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserRegisterDTO } from './UserInterface.ts'
import { UserController } from './users.controller.ts'
import { UserService } from '../../../service/UserService.ts'

export function exampleRoutes(app: FastifyInstance) {
  const userService = new UserService(app.prisma)
  const userController = new UserController(userService)

  app.post(
    '/users',
    async (request: FastifyRequest<{ Body: UserRegisterDTO }>, reply) => {
      try {
        const result = await userController.register(request.body)
        console.log('Usuário criado com sucesso:', result)
        return reply.status(201).send(result)
      } catch (error) {
        console.error('Erro ao criar usuário:', error)
        return reply.status(400).send({ error: 'Erro ao criar usuário' })
      }
    },
  )
}
