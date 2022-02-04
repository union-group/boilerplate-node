import { Router } from "express";
import { ControllerUser } from "../../Controller/User/ControllerUser";
const UserRoute = Router();

/**
 * Routa de teste ela ira ser apagada depois!!!!
 */
 UserRoute.post('/user', (req,res)=>{
  ControllerUser.index(req,res);
});

export {UserRoute}
