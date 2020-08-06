// MÉTODOS HTTP
// GET: Buscar ou listar informações
// POST: Criar alguma nova informação
// PUT: Atualizar alguma informação existente
// DELETE: Deletar alguma informação

// Corpo da Rquisição (Request body) -> Dados para criação ou atuaização de um registro
// Route Params -> Identificar qual recurso eu quero atualizar ou deletar
// Query Params -> Para paginação, filtros e ordenação...

import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnetionControllers from './controllers/ConnectionsControllers';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnetionControllers();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index)
routes.post('/connections', connectionsControllers.create)

export default routes;