import {EntityRepository, Repository} from 'typeorm';
import Pessoa from '../entities/Pessoa';

@EntityRepository(Pessoa)
class PessoasRepository extends Repository<Pessoa>{

  public async findById(id: string): Promise<Pessoa | undefined> {
    const pessoa = this.findOne(id);

    return pessoa;
  }  
}
export default PessoasRepository;