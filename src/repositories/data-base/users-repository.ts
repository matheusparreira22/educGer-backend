import type { User } from '../../models/user.js'
import type { UsersRepository } from '../users-interface.js'

export class UsersDataBaseExample implements UsersRepository {
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }
  findByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }
  create(data: User): Promise<User> {
    throw new Error('Method not implemented.')
  }
}
