import { Request, Response } from "express";
import ListarIluminacaoService from "../services/ListarIluminacaoService";

export default class IluminacaoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listarIluminacao = new ListarIluminacaoService();

    const iluminacao = await listarIluminacao.execute();

    return response.json(iluminacao);
  }

}
