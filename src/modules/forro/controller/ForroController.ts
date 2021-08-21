import { Request, Response } from "express";
import ListarForrosService from "../services/ListarForrosService";

export default class ForroController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listarForros = new ListarForrosService();

    const forros = await listarForros.execute();

    return response.json(forros);
  }

}
