import { Request, Response } from "express";
import ListDimensionService from "../services/ListDimensionService";
import ShowDimensionService from "../services/ShowDimensionsOfBlock";

interface ITeste {
  id: string;
  name: string;
  dimension_block: number;
}

export default class DimensionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDimension = new ListDimensionService();

    const dimensions = await listDimension.execute();

    
    
    return response.json(dimensions);
  }

  public async show(request: Request, response: Response) {
    const showDimension = new ShowDimensionService();
    
    const dimensions = await showDimension.execute();

    let json = JSON.stringify(dimensions);

    console.log(json)
    
    return response.json(dimensions);
  }
}
