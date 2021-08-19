import {EntityRepository, Repository} from 'typeorm';
import DimensionBlock from '../entities/DimensionBlock';

@EntityRepository(DimensionBlock)
class DimensionBlockRepository extends Repository<DimensionBlock>{

  public async findById(id: string): Promise<DimensionBlock | undefined> {
    const DimensionBlock = this.findOne(id, {
      relations: ['type_block', 'type_block.material'],
    });

    return DimensionBlock;
  }  
}
export default DimensionBlockRepository;