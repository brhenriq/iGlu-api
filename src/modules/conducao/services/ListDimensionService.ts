import { getCustomRepository } from "typeorm";
import DimensionBlock from "../typeorm/entities/DimensionBlock";
import Typeblock from "../typeorm/entities/Typeblock";
import DimensionBlockRepository from "../typeorm/repositories/TypeblockRepository";

class ListDimensionService {
  public async execute(): Promise<DimensionBlock[]> {
    const DimensionsRepository = getCustomRepository(DimensionBlockRepository);
    
    const dimension = await DimensionsRepository.find(
      {
        relations: ['type_block', 'type_block.material']
        // join: {
        //   alias: "dimension_block",
        //   leftJoinAndSelect: {
        //     profile: "dimension_block.type_block",
        //     teste: "type_block.materials"
        //   }
        // }
    });
    
    return dimension;
  }
}

export default ListDimensionService;