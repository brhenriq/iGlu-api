import { Router } from 'express';
import CalculoController from '../controller/CalculoController';

const calculoRouter = Router();

const calculoController = new CalculoController();

calculoRouter.get('/parede', calculoController.parede);
calculoRouter.get('/teto', calculoController.teto);

export default calculoRouter;
