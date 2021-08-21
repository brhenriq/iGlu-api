import { Request, Response, Router } from 'express';
import equipamentosRouter from '@modules/equipamentos/routes/equipamentos.routes';
import iluminacaoRouter from '@modules/iluminacao/routes/pessoas.routes';
import pessoasRouter from '@modules/pessoas/routes/pessoas.routes';

const routes = Router();

routes.get('/', (request:Request, response:Response) => {
  const { a, b } = request.body;

  const result = a+b;

  return response.json({ message: 'Hello Dev!' + result });
});

routes.use('/pessoas', pessoasRouter);
routes.use('/equipamentos', equipamentosRouter);
routes.use('/iluminacao', iluminacaoRouter);

export default routes;