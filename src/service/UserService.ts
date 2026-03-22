// aqui vou criar a classe de usuario
import bcrypt from 'bcrypt'
import type { PrismaClient } from '@prisma/client'
import type { UserRegisterDTO } from '../http/controllers/users/UserInterface.ts'
import { UsersDataBase } from '../repositories/data-base/users-repository.ts'

export class UserService {
  private usersRepository: UsersDataBase

  constructor(prisma: PrismaClient) {
    this.usersRepository = new UsersDataBase(prisma)
  }

  // metodo para criar um usuario
  async createUser(userDto: UserRegisterDTO) {
    // vou pegar a senha do usuario e criptografar ela
    userDto.password = await bcrypt.hash(userDto.password, 10)

    // aqui eu faria a lógica para salvar o usuario no banco de dados

    const resultCreate = await this.usersRepository.create({
      FullName: userDto.FullName,
      email: userDto.email,
      password: userDto.password,
    })
    return resultCreate
  }
}
