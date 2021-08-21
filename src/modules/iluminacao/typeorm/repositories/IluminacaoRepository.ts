import {EntityRepository, Repository} from 'typeorm';
import Iluminacao from '../entities/Iluminacao';

@EntityRepository(Iluminacao)
class IluminacaoRepository extends Repository<Iluminacao>{

  public async findById(id: string): Promise<Iluminacao | undefined> {
    const iluminacao = this.findOne(id);

    return iluminacao;
  }  
}
export default IluminacaoRepository;