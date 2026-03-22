import { Prisma, type PrismaClient, type User } from '@prisma/client'
import type { UserRegisterDTO } from '../../http/controllers/users/UserInterface.js'

type UserEmailRow = { email: string }

export class UsersDataBase {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string) {
    // Lógica para buscar um usuário por email no banco de dados
    // RETORNA DA CONSULTA SQL
    const rows = await this.prisma.$queryRaw<UserEmailRow[]>(
      Prisma.sql`SELECT email FROM "User" WHERE email = ${email}`,
    )
    if (rows.length === 0) {
      return null
    }
    return rows[0] ?? null
  }

  async create(data: UserRegisterDTO): Promise<User> {
    // Lógica para criar um novo usuário no banco de dados
    const newUser = await this.prisma.user.create({
      data: {
        fullName: data.FullName,
        email: data.email,
        password: data.password,
      },
    })
    return newUser
  }
}
