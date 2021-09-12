import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import CalculoController from '../controller/CalculoController';

const calculoRouter = Router();

const calculoController = new CalculoController();

calculoRouter.post(
  "/parede",
  celebrate({
    [Segments.BODY]: {
      AreaP: Joi.number().required(),
      AreaVidro: Joi.required(),
      Orientacao: Joi.string().required(),
      Latitude: Joi.required(),
      Bloco_id: Joi.number().required(),
      CondutividadeReboco: Joi.number().required(),
      CondutividadeAssentamento: Joi.number().required(),
      EspessuraRExterna: Joi.number().required(),
      EspessuraRInterna: Joi.number().required(),
      TemperaturaInterna: Joi.number().required(),
      TemperaturaExterna: Joi.number().required(),
    },
  }),
  calculoController.parede
);

calculoRouter.post(
  "/teto",
  celebrate({
    [Segments.BODY]: {
      AreaPiso: Joi.number().required(),
      Telha_id: Joi.number().required(),
      ForroLaje_id: Joi.number().required(),
      TemperaturaInterna: Joi.number().required(),
      TemperaturaExterna: Joi.number().required(),
    },
  }),
  calculoController.teto
);

calculoRouter.post(
  "/pessoas",
  celebrate({
    [Segments.BODY]: {
      atividade: Joi.number().required(),
      quantidade: Joi.number().required(),
    },
  }),
  calculoController.pessoas
);

calculoRouter.post(
  "/equipamentos",
  celebrate({
    [Segments.BODY]: {
      equipamentos: Joi.required(),
    },
  }),
  calculoController.equipamentos
);

calculoRouter.post(
  "/iluminacao",
  celebrate({
    [Segments.BODY]: {
      area: Joi.number().required(),
    },
  }),
  calculoController.iluminacao
);

export default calculoRouter;
