import { Router } from 'express';
import TelhaController from '../controller/TelhaController';

const telhaRouter = Router();

const telhaController = new TelhaController();

telhaRouter.get('/', telhaController.index);

export default telhaRouter;
