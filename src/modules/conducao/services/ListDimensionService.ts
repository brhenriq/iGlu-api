import { getCustomRepository } from "typeorm";
import DimensionBlock from "../typeorm/entities/DimensionBlock";
import DimensionBlockRepository from "../typeorm/repositories/DimensionRepository";

class ListDimensionService {
  public async execute(): Promise<DimensionBlock[]> {
    const DimensionsRepository = getCustomRepository(DimensionBlockRepository);
    
    const dimension = await DimensionsRepository.find({
        relations: ['type_block', 'type_block.material']
    });
    
    return dimension;
  }
}

export default ListDimensionService;