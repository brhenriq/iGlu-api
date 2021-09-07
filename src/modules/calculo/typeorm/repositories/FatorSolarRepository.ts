import { EntityRepository, Repository } from "typeorm";
import FatorSolar from "../entities/FatorSolar";

@EntityRepository(FatorSolar)
class FatorSolarRepository extends Repository<FatorSolar> {
  public async findByOrientacaoLatitute(
    orientacao: string,
    latitude: string
  ): Promise<FatorSolar | undefined> {
    const fatorSolar = this.findOne(orientacao);

    return fatorSolar;
  }
}
export default FatorSolarRepository;
