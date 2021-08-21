import { getCustomRepository } from "typeorm";
import Forro from "../typeorm/entities/Forro";
import ForroRepository from "../typeorm/repositories/ForroRepository";

class ListarForrosService {
  public async execute(): Promise<Forro[]> {
    const forroRepository = getCustomRepository(ForroRepository);
    
    const forros = await forroRepository.find({
      relations: ['material']
    });
    
    return forros;
  }
}

export default ListarForrosService;