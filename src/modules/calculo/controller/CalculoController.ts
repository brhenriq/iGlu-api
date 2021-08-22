import { Request, Response } from "express";
import CalculoService from "../services/CalculoService";

export default class TelhaController {
  public async calculo(request: Request, response: Response): Promise<Response> {
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

    const Calculo = new CalculoService();

    const resultado = await Calculo.execute({
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

}
