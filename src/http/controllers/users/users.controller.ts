import type { UserRegisterDTO } from './UserInterface.ts'
import { UserService } from '../../../service/UserService.ts'

export class UserController {
  constructor(private userService: UserService) {}

  async register(userDto: UserRegisterDTO) {
    // valida se userDto tem os campos necessários
    // Lógica para registrar um novo usuário
    console.log('Recebendo dados para registro:', userDto)
    // if (!userDto.FullName || !userDto.email || !userDto.password) {
    //   throw new Error('Campos obrigatórios: FullName, email, password')
    // }
    // chama o service de usuário para criar o novo usuário
    const result = await this.userService.createUser(userDto)
    return result
  }
}
