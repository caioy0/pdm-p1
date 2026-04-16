// src/components/CapturaDados.jsx
import { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber'
import { Button } from 'primereact/button'
import { FloatLabel } from 'primereact/floatlabel'
import 'primeicons/primeicons.css'
import ExibeDados from './ExibeDados.jsx'
import HistoricoSimulacoes from './HistoricoSimulacoes.jsx'

const CapturaDados = () => {
  const [valorInicial, setValorInicial] = useState(null)
  const [valorAporte, setValorAporte] = useState(null)
  const [taxaJuros, setTaxaJuros] = useState(null)
  const [periodo, setPeriodo] = useState(null)
  const [resultados, setResultados] = useState(null)

  const calcular = () => {
    const vi = Number(valorInicial)
    const va = Number(valorAporte)
    const taxaMensal = Number(taxaJuros) / 100 / 12
    const quantidadeMeses = Number(periodo)

    if (vi < 0 || va < 0 || taxaMensal < 0 || quantidadeMeses <= 0) {
      alert('Por favor, preencha valores validos!')
      return
    }

    let valorFinal = vi * Math.pow(1 + taxaMensal, quantidadeMeses)

    if (taxaMensal > 0) {
      valorFinal +=
        va * ((Math.pow(1 + taxaMensal, quantidadeMeses) - 1) / taxaMensal)
    } else {
      valorFinal += va * quantidadeMeses
    }

    const totalAportado = vi + va * quantidadeMeses
    const jurosAcumulados = valorFinal - totalAportado
    const rentabilidade =
      totalAportado > 0 ? ((valorFinal / totalAportado) - 1) * 100 : 0

    setResultados({
      valorFinal: Number(valorFinal.toFixed(2)),
      numAportes: quantidadeMeses,
      jurosAcumulados: Number(jurosAcumulados.toFixed(2)),
      rentabilidade: Number(rentabilidade.toFixed(2)),
    })
  }

  const limpar = () => {
    setValorInicial('')
    setValorAporte('')
    setTaxaJuros('')
    setPeriodo('')
    setResultados(null)
  }

  return (
    <div  className="p-4" style={{ maxWidth: '860px', margin: '0 auto' }}>
      
      <div className="p-4"
      class="form grid">
          <div className="field col-12 md:col-6 lg:col-3">
            <FloatLabel>
              <InputNumber
                id="valor-inicial"
                value={valorInicial}
                onValueChange={(e) => setValorInicial(e.value)}
                mode="currency"
                currency="BRL"
                locale="pt-BR"
                minFractionDigits={2}
                className="w-full"
              />
              <label htmlFor="valor-inicial">
                <i className="pi pi-wallet mr-1" />
                Valor inicial
              </label>
            </FloatLabel>
          </div>

          <div class='field col'>
            <FloatLabel>  
            <InputNumber id='aporte-mensal'
              className="form-control "
              value={valorAporte}
              onValueChange={(e) => setValorAporte(e.value)}/>
              <label htmlFor="aporte-mensal">Aporte mensal</label>
            </FloatLabel> 
          </div>
        {/* <input
          placeholder="Taxa de juros (% a.a.)"
          type="number"
          className="form-control mb-2"
          value={taxaJuros}
          onChange={(e) => setTaxaJuros(e.target.value)}
          /> */}
          <div class='field col'>
            <FloatLabel>
              <InputNumber id="taxajuros"
              value={taxaJuros} onValueChange={(e) => setTaxaJuros(e.value)} suffix="%" 
              showButtons buttonLayout="horizontal" step={0.25}
              decrementButtonClassName="p-button-danger" 
              incrementButtonClassName="p-button-success" 
              incrementButtonIcon="pi pi-plus" 
              decrementButtonIcon="pi pi-minus"/>
              <label htmlFor="taxajuros">Taxa de juros (% a.a.)</label>
            </FloatLabel>
          </div>

          <div class='field col'>
            <FloatLabel>  
            <InputNumber id='periodo'
              className="form-control"
              value={periodo}
              onValueChange={(e) => setPeriodo(e.value)}/>
              <label htmlFor="periodo">periodo</label>
            </FloatLabel> 
          </div>
      </div>

      <div className="d-flex justify-content-center gap-2 mt-3">
        <Button className="btn btn-primary px-4" onClick={calcular}>
          Calcular
        </Button>

        <Button className="btn btn-secondary px-4" onClick={limpar}>
          Limpar
        </Button>
      </div>

      {resultados && (
        <ExibeDados
          valorFinal={resultados.valorFinal}
          numAportes={resultados.numAportes}
          jurosAcumulados={resultados.jurosAcumulados}
          rentabilidade={resultados.rentabilidade}
        />
      )}

      <HistoricoSimulacoes novoResultado={resultados} />
    </div>
  )
}

export default CapturaDados