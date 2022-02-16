import { IUsersRepository } from '../../../repositories/UserRepositories/IUsersRepository'

export class FindUserByIdUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)

    return user
  }
}
