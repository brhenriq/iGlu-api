import {EntityRepository, Repository} from 'typeorm';
import Forro from '../entities/Forro';

@EntityRepository(Forro)
class ForroRepository extends Repository<Forro>{

  public async findById(id: string): Promise<Forro | undefined> {
    const forro = this.findOne(id, {
      relations: ["material"],
    });

    return forro;
  }  
}
export default ForroRepository;