import { Request, Response, Router } from 'express';
import equipamentosRouter from '@modules/equipamentos/routes/equipamentos.routes';
import iluminacaoRouter from '@modules/iluminacao/routes/pessoas.routes';
import pessoasRouter from '@modules/pessoas/routes/pessoas.routes';
import forroRouter from '@modules/forro/routes/forro.routes';
import telhaRouter from '@modules/telha/routes/telha.routes';
import blocoRouter from '@modules/bloco/routes/bloco.routes';
import calculoRouter from '@modules/calculo/routes/calculo.routes';

const routes = Router();

routes.use('/pessoas', pessoasRouter);
routes.use('/equipamentos', equipamentosRouter);
routes.use('/iluminacao', iluminacaoRouter);
routes.use('/forro', forroRouter);
routes.use('/telha', telhaRouter);
routes.use('/bloco', blocoRouter);
routes.use('/calculo', calculoRouter);

export default routes;