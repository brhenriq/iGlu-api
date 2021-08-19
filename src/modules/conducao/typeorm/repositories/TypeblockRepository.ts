import {EntityRepository, Repository} from 'typeorm';
import Typeblock from '../entities/Typeblock';

@EntityRepository(Typeblock)
class TypeblockRepository extends Repository<Typeblock>{

  public async findById(id: string): Promise<Typeblock | undefined> {
    const Typeblock = this.findOne(id, {
        relations: ['dimension_block']
    });

    return Typeblock;
  }  
}
export default TypeblockRepository;