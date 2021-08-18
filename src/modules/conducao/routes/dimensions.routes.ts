import { Router } from 'express';
import DimensionController from '../controller/DimensionController';

const dimensionRouter = Router();

const dimensionController = new DimensionController();

dimensionRouter.get('/', dimensionController.index);

export default dimensionRouter;
