import {EntityRepository, Repository} from 'typeorm';
import Dimetrics from '../entities/Dimetricsblock';
import Dimetricsblock from '../entities/Dimetricsblock';

@EntityRepository(Dimetricsblock)
class DimetricsblockRepository extends Repository<Dimetricsblock>{

  public async findById(id: string): Promise<Dimetrics | undefined> {
    const Dimetricsblock = this.findOne(id, {
      relations: ['typeblock_id'],
    });

    return Dimetricsblock;
  }
  

}
export default DimetricsblockRepository;