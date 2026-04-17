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
  const [resultados, setResultados] = useState({})
  const [historico, setHistorico] = useState([])

  const calcular = () => {
    const vi = Number(valorInicial)
    const va = Number(valorAporte)
    const taxaMensal = Number(taxaJuros) / 100
    const quantidadeMeses = Number(periodo)

    if (vi <= 0 || va <= 0 || taxaMensal < 0 || quantidadeMeses <= 0) {
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
    const totalInvestido = vi + va * quantidadeMeses

    const novoResultado = {
      valorFinal: Number(valorFinal),
      totalInvestido: Number(totalInvestido),
      numAportes: quantidadeMeses,
      jurosAcumulados: Number(jurosAcumulados),
      rentabilidade: Number(rentabilidade),
    }

    const novoHistorico = [...historico]
    novoHistorico.push({
      valorFinal: novoResultado.valorFinal,
      dataHora: new Date(),
    })

    setResultados(novoResultado)
    setHistorico(novoHistorico)
  }

  const limpar = () => {
    setValorInicial('')
    setValorAporte('')
    setTaxaJuros('')
    setPeriodo('')
    setResultados({
      valorFinal: null,
      numAportes: null,
      jurosAcumulados: null,
      rentabilidade: null,
    })
  }

  let conteudoResultados = null
  if (resultados.valorFinal !== undefined) {
    conteudoResultados = (
      <ExibeDados
        valorFinal={resultados.valorFinal}
        numAportes={resultados.numAportes}
        jurosAcumulados={resultados.jurosAcumulados}
        rentabilidade={resultados.rentabilidade}
        totalInvestido={resultados.totalInvestido}
      />
    )
  }

  return (
    <div className="p-4 surface-card border-round" style={{ maxWidth: '860px', margin: '0 auto' }}>
      <div className="grid formgrid p-fluid gap-3">
        <div className="field col-12 md:col-6 lg:col-3">
          <label htmlFor="valor-inicial">
            <i className="pi pi-wallet mr-2" />
            Valor inicial
          </label>
          <input
            id="valor-inicial"
            placeholder="R$ 0,00"
            value={valorInicial}
            onChange={(e) => setValorInicial(e.target.value)}
            type="number"
            step="0.1"
            className="w-full" />
        </div>

        <div class='field col'>
          <label htmlFor="aporte-mensal">
            <i className="pi pi-money-bill mr-2" />
            Aporte mensal
          </label>
          <input
            id="aporte-mensal"
            placeholder="R$ 0,00"
            type="number"
            value={valorAporte}
            onChange={(e) => setValorAporte(e.target.value)}
            className="w-full" />
        </div>
        <div class='field col'>
          <label htmlFor="taxajuros">
            <i className="pi pi-percentage mr-2" />
            Taxa de juros (mês)
          </label>
          <input id="taxajuros"
            value={taxaJuros}
            type="number"
            placeholder="0.0%"
            onChange={(e) => setTaxaJuros(e.target.value)}
            className="w-full" />
        </div>

        <div className="field col-12 md:col-6 lg:col-3">
          <label htmlFor="periodo">
            <i className="pi pi-calendar mr-2" />
            Período (meses)
          </label>
          <input
            id="periodo"
            placeholder="Meses"
            type='number'
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="d-flex justify-content-center gap-2 mt-3">
        <Button className="btn btn-primary px-4"
          onClick={calcular}
          label="Calcular" 
          icon="pi pi-calculator"
          raised />
        <Button className="btn btn-secondary px-4"
          onClick={limpar}
          label="Limpar" 
          icon="pi pi-refresh"
          outlined />
      </div>

      {conteudoResultados}

      <HistoricoSimulacoes historico={historico} />
    </div>
  )
}

export default CapturaDados
