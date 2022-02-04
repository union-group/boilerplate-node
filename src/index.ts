import express  from "express";
import { Conection } from "./Database";
import { UserRoute } from "./Routes/default/User.routes";
import cors from "cors";

/**
 * ============== nao configurado!!!!
 */
const CorsOption = {
  origin: ''
}

/**
 * ===============
 */
const app = express();
/**
 * Usa o force: True , apenas no desenvolvimento!
 * =============== Sequlize Sync 
 */
//Conection.sync({force:true});
/**
 * ============
 */
app.use(cors);

/**
 * Teste de routa, depois sera apagado..
 */
app.use(UserRoute);
/**
 * ==============
 */
app.listen(5000, ()=>{
  console.log('server running...');
});