import { Request, Response } from "express";
import ListarEquipamentosService from "../services/ListarEquipamentosService";

export default class EquipamentosController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listarEquipamentos = new ListarEquipamentosService();

    const equipamentos = await listarEquipamentos.execute();

    return response.json(equipamentos);
  }

}
