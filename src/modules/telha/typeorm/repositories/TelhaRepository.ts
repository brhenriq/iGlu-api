import {EntityRepository, Repository} from 'typeorm';
import Telha from '../entities/Telha';

@EntityRepository(Telha)
class TelhaRepository extends Repository<Telha>{

  public async findById(id: string): Promise<Telha | undefined> {
    const telha = this.findOne(id, {
      relations: ["material"],
    });

    return telha;
  }  
}
export default TelhaRepository;