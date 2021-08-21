import { Router } from 'express';
import IluminacaoController from '../controller/IluminacaoController';

const iluminacaoRouter = Router();

const iluminacaoController = new IluminacaoController();

iluminacaoRouter.get('/', iluminacaoController.index);

export default iluminacaoRouter;
