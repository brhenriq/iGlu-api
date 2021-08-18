import dimensionRouter from '@modules/conducao/routes/dimensions.routes';
import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (request:Request, response:Response) => {
  const { a, b } = request.body;

  const result = a+b;

  return response.json({ message: 'Hello Dev!' + result });
});

routes.use('/dimensions', dimensionRouter);

export default routes;