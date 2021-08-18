import {EntityRepository, Repository} from 'typeorm';
import DimensionBlock from '../entities/DimensionBlock';

@EntityRepository(DimensionBlock)
class DimensionBlockRepository extends Repository<DimensionBlock>{

  public async findById(id: string): Promise<DimensionBlock | undefined> {
    const DimensionBlock = this.findOne(id, {
      relations: ['id_typeblock'],
    });

    return DimensionBlock;
  }  
}
export default DimensionBlockRepository;