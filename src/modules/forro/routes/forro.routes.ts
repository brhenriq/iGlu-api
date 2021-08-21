import { Router } from 'express';
import ForroController from '../controller/ForroController';

const forroRouter = Router();

const forroController = new ForroController();

forroRouter.get('/', forroController.index);

export default forroRouter;
