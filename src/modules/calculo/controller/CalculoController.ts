import { Request, Response } from "express";
import CalculoParedeService from "../services/CalculoParedeService";
import CalculoTetoService from "../services/CalculoTetoService";

export default class TelhaController {
  public async parede(request: Request, response: Response): Promise<Response> {
    const {
      BlocoPComprimento,
      BlocoPAltura,
      BlocoPLargura,
      BlocoPCondutividade,
      EspessuraRInterna,
      EspessuraRExterna,
      CondutividadeReboco,
      CondutividadeAssentamento,
      TemperaturaExterna,
      TemperaturaInterna,
      AreaP
    } = request.body;

    const CalculoParede = new CalculoParedeService();

    const resultado = await CalculoParede.execute({
      BlocoPComprimento,
      BlocoPAltura,
      BlocoPLargura,
      BlocoPCondutividade,
      EspessuraRInterna,
      EspessuraRExterna,
      CondutividadeReboco,
      CondutividadeAssentamento,
      TemperaturaExterna,
      TemperaturaInterna,
      AreaP
    });

    return response.json(resultado);
  }

  public async teto(request: Request, response: Response): Promise<Response> {
    const {
      AreaPiso,
      CondutividadeTelha,
      EspessuraTelha,
      CondutividadeForrLaje,
      EspessuraForrLaje,
      TemperaturaExterna,
      TemperaturaInterna,
    } = request.body;

    const CalculoTeto = new CalculoTetoService();

    const resultado = await CalculoTeto.execute({
    AreaPiso,
    CondutividadeTelha,
    EspessuraTelha,
    CondutividadeForrLaje,
    EspessuraForrLaje,
    TemperaturaExterna,
    TemperaturaInterna,
  });

    return response.json(resultado);
  }
}
