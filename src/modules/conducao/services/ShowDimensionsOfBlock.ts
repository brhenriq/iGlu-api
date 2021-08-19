import { getCustomRepository } from "typeorm";
import TypeBlock from "../typeorm/entities/Typeblock";
import TypeBlockRepository from "../typeorm/repositories/TypeBlockRepository";



class ShowDimensionService {
  public async execute(): Promise<TypeBlock | undefined> {
    const DimensionsRepository = getCustomRepository(TypeBlockRepository);
    const id = '0f676c74-5e18-4207-801d-683bfad50713';
    
    const dimension = await DimensionsRepository.findById(id);
    
    return dimension;
  }
}

export default ShowDimensionService;