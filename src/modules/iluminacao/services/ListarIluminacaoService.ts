import { getCustomRepository } from "typeorm";
import Iluminacao from "../typeorm/entities/Iluminacao";
import IluminacaoRepository from "../typeorm/repositories/IluminacaoRepository";

class ListarIluminacaoService {
  public async execute(): Promise<Iluminacao[]> {
    const iluminacaoRepository = getCustomRepository(IluminacaoRepository);
    
    const iluminacao = await iluminacaoRepository.find();
    
    return iluminacao;
  }
}

export default ListarIluminacaoService;