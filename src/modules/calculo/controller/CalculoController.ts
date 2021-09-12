import { Request, Response } from "express";
import CalculoEquipamentosService from "../services/CalculoEquipamentosService";
import CalculoIluminacaoService from "../services/CalculoIluminacaoService";
import CalculoInsolacaoService from "../services/CalculoInsolacaoService";
import CalculoParedeService from "../services/CalculoParedeService";
import CalculoPessoasService from "../services/CalculoPessoasService";
import CalculoTetoService from "../services/CalculoTetoService";

export default class TelhaController {
  public async parede(request: Request, response: Response): Promise<Response> {
    const {
      Bloco_id,
      EspessuraRInterna,
      EspessuraRExterna,
      CondutividadeReboco,
      CondutividadeAssentamento,
      TemperaturaExterna,
      TemperaturaInterna,
      AreaP,
      Orientacao,
      AreaVidro,
      Latitude,
    } = request.body;

    const CalculoParede = new CalculoParedeService();
    const CalculoInsolacao = new CalculoInsolacaoService();

    let resultadoVidro;

    let AreaTotal;

    if (AreaVidro) {
      resultadoVidro = await CalculoInsolacao.execute({
        AreaVidro,
        Orientacao,
        Latitude,
      });

      AreaTotal = AreaP - AreaVidro;
    }

    const resultadoParede = await CalculoParede.execute({
      Bloco_id,
      EspessuraRInterna,
      EspessuraRExterna,
      CondutividadeReboco,
      CondutividadeAssentamento,
      TemperaturaExterna,
      TemperaturaInterna,
      AreaP: AreaTotal || AreaP,
    });

    const resultado = Number(resultadoParede) + Number(resultadoVidro || 0);

    return response.json(resultado);
  }

  public async teto(request: Request, response: Response): Promise<Response> {
    const {
      AreaPiso,
      Telha_id,
      ForroLaje_id,
      TemperaturaExterna,
      TemperaturaInterna,
    } = request.body;

    const CalculoTeto = new CalculoTetoService();

    const resultado = await CalculoTeto.execute({
      AreaPiso,
      Telha_id,
      ForroLaje_id,
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

    const resultado = await CalculoEquipamentos.execute({ equipamentos });

    return response.json(resultado);
  }

  public async iluminacao(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { area } = request.body;

    const calculoIluminacao = new CalculoIluminacaoService();

    const resultado = await calculoIluminacao.execute({ area });

    return response.json(resultado);
  }
}
