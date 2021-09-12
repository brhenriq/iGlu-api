
function calculoIluminacao(Area: number) {
  const valor = Area - 6;

  const potenciaTotal = 100 + (Math.trunc((valor / 4)) * 60);
  
  const kcal = 0.86 * potenciaTotal * 1.2;

  return kcal;
}

interface IRequest {
  area: number;
}

class CalculoIluminacaoService {
  public async execute({
    area,
  }: IRequest): Promise<Number> {

    const resultado = calculoIluminacao(area);

    return resultado;
  }
}

export default CalculoIluminacaoService;
