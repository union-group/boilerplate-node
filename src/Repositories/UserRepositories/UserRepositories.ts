import { UserModel } from "../../Database";
import { IUserDTORepositorio } from './IUserRepositorie';
export class UserRepositories{
  /**
   * 
   * @param UserData !!! Conceito DTO 
   */
  CreateUser({nome,email,password}:IUserDTORepositorio):void{
    UserModel.create({nome,email,password});
  }
}