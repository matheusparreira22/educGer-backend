import bcrypt from 'bcrypt'

import { env } from '../src/env/index.ts'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

async function main() {
  const conectionString = env.DATABASE_URL
  if (!conectionString) {
    throw new Error('DATABASE_URL is not defined in the environment variables.')
  }
  const adapter = new PrismaPg({
    connectionString: conectionString,
  })

  const userAdmin = {
    fullName: process.env.ADMIN_NAME || 'Admin',
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    password: process.env.ADMIN_PASSWORD || 'admin123',
  }
  const hashPassword = await bcrypt.hash(userAdmin.password, 10)
  // criar uma instancia do prisma client
  const prisma = new PrismaClient({
    adapter,
  })

  await prisma.user.upsert({
    where: { email: userAdmin.email },
    update: {
      fullName: userAdmin.fullName,
      password: hashPassword,
      userType: 'ADMIN',
      active: true,
    },
    create: {
      ...userAdmin,
      password: hashPassword,
      userType: 'ADMIN',
      active: true,
    },
  })

  await prisma.$disconnect()
  console.log('Admin user executed successfully.')
}

main().catch((error) => {
  console.error('Error executing seed script:', error)
  process.exit(1)
})
