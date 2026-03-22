import fp from 'fastify-plugin'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { env } from '../../env/index.ts'

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

export const prismaPlugin = fp(async (app) => {
  const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL,
  })

  const prisma = new PrismaClient({ adapter })

  await prisma.$connect()
  app.decorate('prisma', prisma)

  app.addHook('onClose', async (server) => {
    await server.prisma.$disconnect()
  })
})
