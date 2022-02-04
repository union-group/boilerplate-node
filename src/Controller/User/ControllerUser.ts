import { Request,Response } from "express";
import { UserServico } from "../../Service/UserService/UserService";
import { UserRepositories } from "../../Repositories/UserRepositories/UserRepositories";



const RepositoriesUser = new UserRepositories();
const UserServces = new UserServico(RepositoriesUser);
export class ControllerUser {
  
/**
 * Criando Usario!
 */
  static index (Req:Request,Res:Response) : Response {
    const {nome,email,password} = Req.body;
    UserServces.CreateUserService({nome,email,password});
    return Res.status(200).send();
  }
} 