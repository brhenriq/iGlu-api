const objeto = {
  AreaP:20,
  Orientacao:"Norte",
    MaterialReboco:{
      name:"Argamassa",
      condutividade:1.15
    },
    BlocoP:{
      altura:0.05,
      comprimento:0.19,
      largura:0.09,
      condutividade:0.90,
      nome:"Bloco 6 Furos"
    },
    MaterialAssentamento : {
      condutividade : 1.15
    },

    EspessuraR_externa:0.02,
    EspessuraR_interna:0.02,
    TemperaturaInterna: 24,
    TemperaturaExterna: 32
  }

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

class CalculoService {
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
console.log({
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
  })
    let Aa = AreaA(BlocoPComprimento, BlocoPAltura)
    let Ra = ResistenciaA(EspessuraRInterna, EspessuraRExterna, CondutividadeReboco, CondutividadeAssentamento, BlocoPLargura)
    let Rb = ResistenciaB(EspessuraRInterna, EspessuraRExterna, CondutividadeReboco, BlocoPCondutividade, BlocoPLargura)
    let Ab = AreaB(BlocoPAltura, BlocoPComprimento)
    console.log(Aa, Ab, Ra, Rb)
    
    let Rt = ResistenciaParede(Aa, Ab, Ra, Rb)
    
    let u = CoeficienteGlobal(Rt)
    
    let delta = DeltaT(TemperaturaInterna, TemperaturaExterna)
    
    let final = ConducaoFinal(AreaP, u, delta)
    
    console.log(Rt, u, delta)
    
    return final;
  }
}

export default CalculoService;