import { getCustomRepository } from "typeorm";
import Bloco from "../typeorm/entities/Bloco";
import BlocoRepository from "../typeorm/repositories/BlocoRepository";

class ListarBlocosService {
  public async execute(): Promise<Bloco[]> {
    const blocoRepository = getCustomRepository(BlocoRepository);
    
    const blocos = await blocoRepository.find({
      relations: ['material', 'modelo']
    });
    
    return blocos;
  }
}

export default ListarBlocosService;