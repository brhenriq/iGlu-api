import { Router } from 'express';
import DimensionController from '../controller/DimensionController';

const dimensionRouter = Router();

const dimensionController = new DimensionController();

// dimensionRouter.get('/', dimensionController.index);
dimensionRouter.get('/', dimensionController.show);

export default dimensionRouter;
