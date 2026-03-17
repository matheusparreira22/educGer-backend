// import { hash } from 'crypto'
// import type { User } from '../models/user.js'
// import type { UsersDataBaseExample } from '../repositories/data-base/users-repository.js'

// interface RegisterServiceRequest {
//   email: string
//   name: string
//   password: string
// }

// interface RegisterServiceResponse {
//   user: User
// }

// export class RegisterUseCase {
//   constructor(private usersRepository: UsersDataBaseExample) {}

//   async execute({
//     email,
//     name,
//     password
//   }: RegisterServiceRequest): Promise<RegisterServiceResponse> {
//     const password_hash = hash('sha1', password)

//     const userWithSameEmail = await this.usersRepository.findByEmail(email)

//     if (userWithSameEmail) {
//       throw new Error()
//     }

//     const user = await this.usersRepository.create({
//       name,
//       email,
//       password_hash,
//       permission: 'DEFAULT'
//     })

//     return {
//       user
//     }
//   }
// }
