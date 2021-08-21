import { Router } from 'express';
import PessoasController from '../controller/PessoasController';

const pessoasRouter = Router();

const pessoasController = new PessoasController();

pessoasRouter.get('/', pessoasController.index);

export default pessoasRouter;
