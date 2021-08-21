import { Request, Response, Router } from 'express';
import equipamentosRouter from '@modules/equipamentos/routes/equipamentos.routes';
import iluminacaoRouter from '@modules/iluminacao/routes/pessoas.routes';
import pessoasRouter from '@modules/pessoas/routes/pessoas.routes';
import forroRouter from '@modules/forro/routes/forro.routes';
import telhaRouter from '@modules/telha/routes/telha.routes';
import blocoRouter from '@modules/bloco/routes/bloco.routes';

const routes = Router();

routes.get('/', (request:Request, response:Response) => {
  const { a, b } = request.body;

  const result = a+b;

  return response.json({ message: 'Hello Dev!' + result });
});

routes.use('/pessoas', pessoasRouter);
routes.use('/equipamentos', equipamentosRouter);
routes.use('/iluminacao', iluminacaoRouter);
routes.use('/forro', forroRouter);
routes.use('/telha', telhaRouter);
routes.use('/bloco', blocoRouter);

export default routes;