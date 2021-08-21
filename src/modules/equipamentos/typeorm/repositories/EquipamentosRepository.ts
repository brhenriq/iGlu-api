import {EntityRepository, Repository} from 'typeorm';
import Equipamento from '../entities/Equipamento';

@EntityRepository(Equipamento)
class EquipamentosRepository extends Repository<Equipamento>{

  public async findById(id: string): Promise<Equipamento | undefined> {
    const Equipamento = this.findOne(id);

    return Equipamento;
  }  
}
export default EquipamentosRepository;