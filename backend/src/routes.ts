import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;


/* 
Driver nativo = Configura o banco de dados sem abstrações, sintaxe igual se dentro do banco
Query builder = Configura o banco de dados com abstrações, sintaxe mistura js com sql
ORM = Configura o banco de dados com o maior nivel de abstração, Cada tabela do banco de dados é uma classe no js
*/

/*
Rota = conjunto
Recurso = usuario

Metodos HTTP = GET, POSTM PUT, DELETE:

GET = Buscar uma informação (Listas, item)
POST = Criando uma informação
PUT = Editando uma informação
DELETE = Deletando uma informação

Parametros:

Query Params: http://localhost:3333/users?search(diego) (Pode ser concatenado com &) / acessado por (request.query)
Route Params: http://localhost:3333/users/1 (Identificar um recurso) / acessado por (request.params)
Body: http://localhost:3333/users (Requisições com bastante dados) acessado por (request.body)
*/
