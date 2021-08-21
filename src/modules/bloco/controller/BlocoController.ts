import { Request, Response } from "express";
import ListarBlocosService from "../services/ListarBlocosService";

export default class TelhaController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listarBlocos = new ListarBlocosService();

    const blocos = await listarBlocos.execute();

    return response.json(blocos);
  }

}
