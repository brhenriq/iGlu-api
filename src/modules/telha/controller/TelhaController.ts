import { Request, Response } from "express";
import ListarTelhasService from "../services/ListarTelhasService";

export default class TelhaController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listarTelhas = new ListarTelhasService();

    const telhas = await listarTelhas.execute();

    return response.json(telhas);
  }

}
