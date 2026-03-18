import './env/index.js'
import fastify from 'fastify'
import { prismaPlugin } from './http/plugins/prisma.js'
import { exampleRoutes } from './http/controllers/users/routes.js'

export const app = fastify()

app.register(prismaPlugin)
app.register(exampleRoutes)
