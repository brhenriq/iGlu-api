import { Request, Response } from "express";
import ListDimensionService from "../services/ListDimensionService";

export default class DimensionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDimension = new ListDimensionService();

    const dimensions = await listDimension.execute();

    return response.json(dimensions);
  }
}
