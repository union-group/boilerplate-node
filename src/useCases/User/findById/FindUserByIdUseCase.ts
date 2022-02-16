import { IUsersRepository } from '../../../Repositories/UserRepositories/IUsersRepository'

export class FindUserByIdUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)

    return user
  }
}
