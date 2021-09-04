function pessoas(atividade: number, quantidade: number) {
  const valor = atividade * 0.86 * quantidade;

  return valor;
}

interface IRequest {
  atividade: number;
  quantidade: number;
}

class CalculoPessoasService {
  public async execute({
    atividade,
    quantidade,
  }: IRequest): Promise<Number> {
    const resultado = pessoas(atividade, quantidade);

    return resultado;
  }
}

export default CalculoPessoasService;
