
//importa o express para a variável
const express = require("express");
const cors = require("cors");

const routes = require("./routes");


/**
 *armazenar a aplicação, instanciando. 
 */
const app = express();


app.use(cors());
app.use(express.json());

/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados e enviados na rota após "?" (Filtros, paginação).
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSql, Oracle, Microsoft SQL Server
 * 
 * NOSQL: MongoDB, CouchDB, etc
 * 
 */


app.use(routes);

//ouvir a porta localhost3333

app.listen(3333);