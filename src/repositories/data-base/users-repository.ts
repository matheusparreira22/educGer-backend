// import { Permission, type User } from '@prisma/client'
// import { randomUUID } from 'node:crypto'
// import type { CreateUserInput } from '../../models/user.js'
// import type { UsersRepository } from '../users-interface.js'

// export class UsersDataBaseExample implements UsersRepository {
//   async findById(id: string): Promise<User | null> {
//     throw new Error('Method not implemented.')
//   }
//   async findByEmail(email: string): Promise<User | null> {
//     throw new Error('Method not implemented.')
//   }
//   async create(data: CreateUserInput): Promise<User> {
//     return {
//       id: randomUUID(),
//       name: data.name,
//       email: data.email,
//       password_hash: data.password_hash,
//       permission: data.permission ?? Permission.DEFAULT,
//       createdAt: new Date(),
//       updatedAt: new Date()
//     }
//   }
// }
