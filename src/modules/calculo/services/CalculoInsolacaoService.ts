import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import FatorSolarRepository from "../typeorm/repositories/FatorSolarRepository";

function calculoInsolacao(AreaVidro: number, fator_solar: number) {
  const valor = AreaVidro * fator_solar * 1;

  return valor;
}

interface IRequest {
  AreaVidro: number;
  Orientacao: string;
  Latitude: number;
}

class CalculoInsolacaoService {
  public async execute({ AreaVidro, Orientacao, Latitude }: IRequest): Promise<Number> {
    const fatorSolarRepository = getCustomRepository(FatorSolarRepository);

    let Lat = Math.abs(Math.trunc(Latitude));

    if (Lat < 6) Lat = 0;
    else if (Lat < 16) Lat = 10;
    else if (Lat < 26) Lat = 20;
    else Lat = 30;

    const fatorSolar = await fatorSolarRepository
      .createQueryBuilder("fator_solar")
      .where(`orientacao = '${Orientacao}'`)
      .andWhere(`latitude = '${Lat}'`)
      .getOne();

    if (!fatorSolar) throw new AppError('Não foi encontrado fator solar');

    const resultado = calculoInsolacao(AreaVidro, fatorSolar.fator_solar);
    
    return resultado;
  }
}

export default CalculoInsolacaoService;
