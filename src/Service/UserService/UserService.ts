import { UserRepositories } from "../../Repositories/UserRepositories/UserRepositories";
import { IUserDTORepositorio } from '../../Repositories/UserRepositories/IUserRepositorie';


export class UserServico {
  /**
   * 
   * @param Repositories Adicionando o repositorio ao Servico!
   */
  constructor (private Repositories:UserRepositories){}
  CreateUserService({nome,email,password}:IUserDTORepositorio):void{
    this.Repositories.CreateUser({nome,email,password});
  }
  /**
   * 
   */
}