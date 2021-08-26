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
  CondutividadeTelha: number;
  EspessuraTelha: number;
  CondutividadeForrLaje: number;
  EspessuraForrLaje: number;
  TemperaturaExterna: number;
  TemperaturaInterna: number;
}

class CalculoTetoService {
  public async execute({
    AreaPiso,
    CondutividadeTelha,
    EspessuraTelha,
    CondutividadeForrLaje,
    EspessuraForrLaje,
    TemperaturaExterna,
    TemperaturaInterna,
  }: IRequest): Promise<Number> {
    const Rt = ResistenciaTetoForlaje(
      EspessuraTelha,
      CondutividadeTelha,
      EspessuraForrLaje,
      CondutividadeForrLaje
    );

    const eq = Eq(AreaPiso, Rt, TemperaturaInterna, TemperaturaExterna);

    return eq;
  }
}

export default CalculoTetoService;
