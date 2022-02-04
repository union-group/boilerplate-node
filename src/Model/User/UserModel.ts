import { DataType, Sequelize } from "sequelize-typescript";

export class User{
  static Init (Conection:Sequelize){
    return Conection.define("",{
      id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataType.STRING,
        allowNull: false
      },
      email:{
        type:DataType.STRING,
        allowNull:false
      },
      password: { 
        type: DataType.STRING,
        allowNull:false
      }
    });
  }
}