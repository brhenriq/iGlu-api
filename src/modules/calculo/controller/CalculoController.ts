import { Request, Response } from "express";
import CalculoEquipamentosService from "../services/CalculoEquipamentosService";
import CalculoInsolacaoService from "../services/CalculoInsolacaoService";
import CalculoParedeService from "../services/CalculoParedeService";
import CalculoPessoasService from "../services/CalculoPessoasService";
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
      AreaP,
      Orientacao,
      AreaVidro,
      Latitude
    } = request.body;

    const CalculoParede = new CalculoParedeService();
    const CalculoInsolacao = new CalculoInsolacaoService();

    const resultadoParede = await CalculoParede.execute({
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
      AreaP,
    });

    let resultado = resultadoParede;

    if (AreaVidro) {
      const resultadoVidro = await CalculoInsolacao.execute({
        AreaVidro,
        Orientacao,
        Latitude,
      });

      resultado = 0;

      resultado = Number(resultadoVidro) + Number(resultadoParede);
      console.log(resultadoVidro, resultadoParede);
    }


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

  public async pessoas(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { atividade, quantidade } = request.body;

    const CalculoPessoa = new CalculoPessoasService();

    const resultado = await CalculoPessoa.execute({ atividade, quantidade });

    return response.json(resultado);
  }

  public async equipamentos(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { equipamentos } = request.body;

    const CalculoEquipamentos = new CalculoEquipamentosService();

    const resultado = await CalculoEquipamentos.execute({equipamentos});

    return response.json(resultado);
  }
}
