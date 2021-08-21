import { getCustomRepository } from "typeorm";
import Equipamento from "../typeorm/entities/Equipamento";
import EquipamentosRepository from "../typeorm/repositories/EquipamentosRepository";

class ListarEquipamentosService {
  public async execute(): Promise<Equipamento[]> {
    const equipamentosRepository = getCustomRepository(EquipamentosRepository);
    
    const equipamentos = await equipamentosRepository.find();
    
    return equipamentos;
  }
}

export default ListarEquipamentosService;