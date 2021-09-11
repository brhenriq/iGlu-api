function AreaA(valor1: number,valo2: number){
  const valorTotal = (valor1 * 0.01) + (valo2 * 0.01)
  return valorTotal
}

function  ResistenciaA(EspessuraInterna: number,EspessuraExterna: number,CondutividadeReboco: number,CondutividadeAssentamento: number,LarguraBloco: number){
 const valorTotal = (EspessuraInterna/CondutividadeReboco) + (LarguraBloco/CondutividadeAssentamento) + (EspessuraExterna/CondutividadeReboco)
 return valorTotal
}

function ResistenciaB(EspessuraInterna: number,EspessuraExterna: number,CondutividadeReboco: number,CondutividadeBloco: number,LarguraBloco: number){
  const valorTotal = (EspessuraInterna/CondutividadeReboco) + (LarguraBloco/CondutividadeBloco) + (EspessuraExterna/CondutividadeReboco)
  return valorTotal
}

function AreaB(AlturaBloco: number,ComprimentoBloco: number){
  const valorTotal = (AlturaBloco * ComprimentoBloco)
  return valorTotal;
}

function ResistenciaParede(Aa: number,Ab: number,Ra: number,Rb: number){
  var a = Aa+Ab
  var b =Aa/Ra
  var c = Ab/Rb
  const valorTotal = (a)/((b) + (c))
  return valorTotal
}

function CoeficienteGlobal(Rt: number){
  const ValorTotal= 0.13 + Rt + 0.04
  const u = (1/ValorTotal)
  return u;
}

function DeltaT(ti: number,te: number){
const valor =  te - ti
return valor
}

function ConducaoFinal(Area: number,U: number,Delta: number){
 const Valor =  Area * U * Delta
 return Valor
}

interface IRequest {
  BlocoPComprimento: number,
  BlocoPAltura: number,
  BlocoPLargura: number,
  BlocoPCondutividade: number,
  EspessuraRInterna: number,
  EspessuraRExterna: number,
  CondutividadeReboco: number,
  CondutividadeAssentamento: number,
  TemperaturaExterna: number,
  TemperaturaInterna: number,
  AreaP: number
}

class CalculoParedeService {
  public async execute({
    BlocoPComprimento,
    BlocoPAltura,
    BlocoPLargura,
    BlocoPCondutividade,
    EspessuraRInterna,
    EspessuraRExterna,
    CondutividadeReboco,
    CondutividadeAssentamento,
    TemperaturaExterna,
    TemperaturaInterna,
    AreaP
  }: IRequest): Promise<Number> {

    console.log(AreaP);
    
    let Aa = AreaA(BlocoPComprimento, BlocoPAltura)
    let Ra = ResistenciaA(EspessuraRInterna, EspessuraRExterna, CondutividadeReboco, CondutividadeAssentamento, BlocoPLargura)
    let Rb = ResistenciaB(EspessuraRInterna, EspessuraRExterna, CondutividadeReboco, BlocoPCondutividade, BlocoPLargura)
    let Ab = AreaB(BlocoPAltura, BlocoPComprimento)
    
    let Rt = ResistenciaParede(Aa, Ab, Ra, Rb)
    
    let u = CoeficienteGlobal(Rt)
    
    let delta = DeltaT(TemperaturaInterna, TemperaturaExterna)
    
    let final = ConducaoFinal(AreaP, u, delta)
    
    return final;
  }
}

export default CalculoParedeService;