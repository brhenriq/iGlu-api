import { Request, Response } from "express";
import ListarPessoasService from "../services/ListarPessoasService";

export default class PessoasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listarPessoas = new ListarPessoasService();

    const pessoas = await listarPessoas.execute();

    return response.json(pessoas);
  }

}
