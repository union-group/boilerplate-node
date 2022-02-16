import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../../../repositories/UserRepositories/IUsersRepository'

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ firstName, lastName, email }: ICreateUserDTO) {
    await this.usersRepository.create({ firstName, lastName, email })
  }
}
