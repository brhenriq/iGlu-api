import { getCustomRepository } from "typeorm";
import Telha from "../typeorm/entities/Telha";
import TelhaRepository from "../typeorm/repositories/TelhaRepository";

class ListarTelhasService {
  public async execute(): Promise<Telha[]> {
    const telhaRepository = getCustomRepository(TelhaRepository);
    
    const telhas = await telhaRepository.find({
      relations: ['material']
    });
    
    return telhas;
  }
}

export default ListarTelhasService;