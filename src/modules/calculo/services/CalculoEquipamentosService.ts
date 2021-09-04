function calculoEquipamentos(potencia: number, quantidade: number) {
  const valor = potencia * 0.86 * quantidade;

  return valor;
}

interface IEquipamentos {
  potencia: number;
  quantidade: number;
}

interface IRequest {
  equipamentos: IEquipamentos[];
}

class CalculoEquipamentosService {
  public async execute({ equipamentos }: IRequest): Promise<Number> {
    let resultado = 0;

    for (let index = 0; index < equipamentos.length; index++) {
      resultado += calculoEquipamentos(
        equipamentos[index].potencia,
        equipamentos[index].quantidade
      );
    }

    return resultado;
  }
}

export default CalculoEquipamentosService;
