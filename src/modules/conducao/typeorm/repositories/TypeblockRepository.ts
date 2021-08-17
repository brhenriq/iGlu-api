import {EntityRepository, Repository} from 'typeorm';
import Typeblock from '../entities/Typeblock';

@EntityRepository(Typeblock)
class TypeblockRepository extends Repository<Typeblock>{

 
  
  
}
export default TypeblockRepository;