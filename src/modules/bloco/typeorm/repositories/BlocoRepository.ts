import {EntityRepository, Repository} from 'typeorm';
import Bloco from '../entities/Bloco';

@EntityRepository(Bloco)
class BlocoRepository extends Repository<Bloco>{

  public async findById(id: string): Promise<Bloco | undefined> {
    const bloco = this.findOne(id, {
      relations: ['material']
    });

    return bloco;
  }  
}
export default BlocoRepository;