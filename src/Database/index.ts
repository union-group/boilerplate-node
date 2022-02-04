import {Sequelize} from "sequelize-typescript";
import Config from "../Config";
import { User } from '../Model/User/UserModel';
const Conection = new Sequelize(Config.Database,Config.username,Config.password,
  {dialect:'mysql',host:Config.host});

const UserModel = User.Init(Conection);

export {Conection,UserModel}
