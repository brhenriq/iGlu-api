import { Router } from 'express';
import CalculoController from '../controller/CalculoController';

const calculoRouter = Router();

const calculoController = new CalculoController();

calculoRouter.get('/', calculoController.calculo);

export default calculoRouter;
