// src/components/CapturaDados.jsx
import { useState } from 'react'
import { Button } from 'primereact/button'
import ExibeDados from './ExibeDados.jsx'
import HistoricoSimulacoes from './HistoricoSimulacoes.jsx'

const CapturaDados = () => {
  const [valorInicial, setValorInicial] = useState(null)
  const [valorAporte, setValorAporte] = useState(null)
  const [taxaJuros, setTaxaJuros] = useState(null)
  const [periodo, setPeriodo] = useState(null)
  const [resultados, setResultados] = useState(null)
  const [historico, setHistorico] = useState([])

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

    const novoResultado = {
      valorFinal: Number(valorFinal.toFixed(2)),
      numAportes: quantidadeMeses,
      jurosAcumulados: Number(jurosAcumulados.toFixed(2)),
      rentabilidade: Number(rentabilidade.toFixed(2)),
    }

    setResultados(novoResultado)
    setHistorico((prev) => [
      ...prev,
      { valorFinal: novoResultado.valorFinal, dataHora: new Date() },
    ])
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
              <label htmlFor="valor-inicial">
                <i className="pi pi-wallet mr-1" />
                Valor inicial
              </label>
              <input
                id="valor-inicial"
                value={valorInicial}
                onChange={(e) => setValorInicial(e.target.value)}
                type="number"
                step="0.1"
                className="w-full"/>
          </div>

          <div class='field col'>
            <label htmlFor="aporte-mensal">
                <i className="pi pi-plus-circle mr-1" />
                Aporte mensal
              </label>
            <input
                id="aporte-mensal"
                value={valorAporte}
                onChange={(e) => setValorAporte(e.target.value)}
                className="w-full"/>
          </div>
          <div class='field col'>
            <label htmlFor="taxajuros"> 
              <i className="pi pi-percentage mr-1 taxa-info" /> 
              Taxa de juros
            </label>
            <input id="taxajuros"
              value={taxaJuros} 
              onChange={(e) => setTaxaJuros(e.target.value)}
              className="w-full"/>
          </div>

          <div className="field col-12 md:col-6 lg:col-3">
              <label htmlFor="periodo">
                <i className="pi pi-calendar mr-1" />
                Período (meses)
              </label>
              <input
                id="periodo"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
                className="w-full"
              />
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
          rentabilidade={resultados.rentabilidade}/>
      )}

      <HistoricoSimulacoes historico={historico} />
    </div>
  )
}

export default CapturaDados
