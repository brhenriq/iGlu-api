import { getCustomRepository } from "typeorm";
import Pessoa from "../typeorm/entities/Pessoa";
import PessoasRepository from '../typeorm/repositories/PessoasRepository';

class ListarPessoasService {
  public async execute(): Promise<Pessoa[]> {
    const pessoasRepository = getCustomRepository(PessoasRepository);
    
    const pessoas = await pessoasRepository.find();
    
    return pessoas;
  }
}

export default ListarPessoasService;