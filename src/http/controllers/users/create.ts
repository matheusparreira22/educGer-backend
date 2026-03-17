// import type { FastifyReply, FastifyRequest } from 'fastify'
// import { z } from 'zod'
// import { PrismaUsersRepository } from '../../../repositories/data-base/prisma-users-repository.js'
// import { RegisterUseCase } from '../../../service/register.js'

// export async function create(request: FastifyRequest, reply: FastifyReply) {
//   const registerBodySchema = z.object({
//     name: z.string().min(1),
//     email: z.string().email(),
//     password: z.string().min(6)
//   })

//   const { name, email, password } = registerBodySchema.parse(request.body)

//   const usersRepository = new PrismaUsersRepository(request.server.prisma)
//   const registerUseCase = new RegisterUseCase(usersRepository)

//   const { user } = await registerUseCase.execute({
//     name,
//     email,
//     password
//   })

//   return reply.status(201).send({ user })
// }
