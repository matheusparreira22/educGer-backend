import type { User } from '../models/user.js'

export interface UsersRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(data: User): Promise<User>
}
