import { Router } from 'express';
import EquipamentosController from '../controller/EquipamentosController';

const equipamentosRouter = Router();

const equipamentosController = new EquipamentosController();

equipamentosRouter.get('/', equipamentosController.index);

export default equipamentosRouter;
