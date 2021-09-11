import { getCustomRepository } from "typeorm";
import FatorSolarRepository from "../typeorm/repositories/FatorSolarRepository";

function calculoInsolacao(AreaVidro: number, fator_solar: number) {
  const valor = AreaVidro * fator_solar * 1;

  return valor;
}

interface IRequest {
  AreaVidro: number;
  Orientacao: string;
  Latitude: string
}

class CalculoInsolacaoService {
  public async execute({ AreaVidro, Orientacao, Latitude }: IRequest): Promise<Number> {
    const fatorSolarRepository = getCustomRepository(FatorSolarRepository);

    const fatorSolar = await fatorSolarRepository
      .createQueryBuilder("fator_solar")
      .where(`orientacao = '${Orientacao}'`)
      .andWhere(`latitude = '${Latitude}'`)
      .getOne();

    const resultado = calculoInsolacao(AreaVidro, fatorSolar?.fator_solar || 0);
    
    return resultado;
  }
}

export default CalculoInsolacaoService;
