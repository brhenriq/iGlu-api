import ForroRepository from "@modules/forro/typeorm/repositories/ForroRepository";
import TelhaRepository from "@modules/telha/typeorm/repositories/TelhaRepository";
import { getCustomRepository } from "typeorm";

function ResistenciaTetoForlaje(
  EspessuraTelha: number,
  CondutividadeTelha: number,
  EspessuraForLaje: number,
  CondutividadeForLaje: number
) {
  const a = EspessuraTelha / CondutividadeTelha;
  const b = EspessuraForLaje / CondutividadeForLaje;

  const valorTotal = a + b + 0.61;

  const valorD = 0.17 + valorTotal + 0.04;

  const U = 1 / valorD;
  return U;
}

function Eq(
  areaPiso: number,
  U: number,
  TemperaturaI: number,
  TemperaturaE: number
) {
  const DeltaT = TemperaturaE - TemperaturaI;
  const valor = areaPiso * U * (DeltaT * 2);

  return valor;
}

interface IRequest {
  AreaPiso: number;
  Telha_id: number;
  ForroLaje_id: number;
  TemperaturaExterna: number;
  TemperaturaInterna: number;
}

class CalculoTetoService {
  public async execute({
    AreaPiso,
    Telha_id,
    ForroLaje_id,
    TemperaturaExterna,
    TemperaturaInterna,
  }: IRequest): Promise<Number> {

    const telhaRepository = getCustomRepository(TelhaRepository);
    const forroRepository = getCustomRepository(ForroRepository);

    const telha = await telhaRepository.findById(Telha_id.toString());
    const forroLaje = await forroRepository.findById(
      ForroLaje_id.toString()
    );
 
    if (!telha || !forroLaje) return 0;

    console.log(telha, forroLaje);

    const Rt = ResistenciaTetoForlaje(
      telha.espessura,
      telha.material.condutividade,
      forroLaje.espessura,
      forroLaje.material.condutividade
    );

    const eq = Eq(AreaPiso, Rt, TemperaturaInterna, TemperaturaExterna);

    return eq;
  }
}

export default CalculoTetoService;
