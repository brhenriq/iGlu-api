import { Router } from 'express';
import BlocoController from '../controller/BlocoController';

const blocoRouter = Router();

const blocoController = new BlocoController();

blocoRouter.get('/', blocoController.index);

export default blocoRouter;
