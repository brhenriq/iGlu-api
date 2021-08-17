import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', async (request:Request, response:Response) => {
  const { a, b } = request.body;

  const result = a+b;

  return response.json({ message: 'Hello Dev!' + result });
});

export default routes;