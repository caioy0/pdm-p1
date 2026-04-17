// src/components/CapturaDados.jsx
import { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber'
import { Button } from 'primereact/button'
import { FloatLabel } from 'primereact/floatlabel'
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
    const totalInvestido = vi + va * quantidadeMeses

    const novoResultado = {
      valorFinal: Number(valorFinal),
      numAportes: quantidadeMeses,
      jurosAcumulados: Number(jurosAcumulados),
      rentabilidade: Number(rentabilidade),
      totalInvestido: Number(totalInvestido),
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
    <div className="p-4 surface-card border-round " style={{ maxWidth: '860px', margin: '0 auto' }}>
      <div className="grid formgrid p-fluid gap-3">

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
              <i className="pi pi-wallet mr-2" />
              Valor inicial
            </label>
          </FloatLabel>
        </div>

        <div className="field col-12 md:col-6 lg:col-3">
          <FloatLabel>
            <InputNumber
              id="aporte-mensal"
              value={valorAporte}
              onValueChange={(e) => setValorAporte(e.value)}
              mode="currency"
              currency="BRL"
              locale="pt-BR"
              className="w-full"
            />
            <label htmlFor="aporte-mensal">
              <i className="pi pi-money-bill mr-2" />
              Aporte mensal
            </label>
          </FloatLabel>
        </div>

        <div className="field col-12 md:col-6 lg:col-3">
          <FloatLabel>
            <InputNumber
              id="taxajuros"
              value={taxaJuros}
              onValueChange={(e) => setTaxaJuros(e.value)}
              suffix="%"
              showButtons
              buttonLayout="horizontal"
              step={0.25}
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              className="w-full"
            />
            <label htmlFor="taxajuros">
              <i className="pi pi-percentage mr-2" />
              Taxa de juros (mês)
            </label>
          </FloatLabel>
        </div>

        <div className="field col-12 md:col-6 lg:col-3">
          <FloatLabel>
            <InputNumber
              id="periodo"
              value={periodo}
              onValueChange={(e) => setPeriodo(e.value)}
              className="w-full"
            />
            <label htmlFor="periodo">
              <i className="pi pi-calendar mr-2" />
              Período (meses)
            </label>
          </FloatLabel>
        </div>

      </div>

      <div className="flex justify-content-center gap-3 mt-4">
        <Button
          label="Calcular"
          icon="pi pi-calculator"
          onClick={calcular}
          raised
        />

        <Button
          label="Limpar"
          icon="pi pi-refresh"
          severity="secondary"
          outlined
          onClick={limpar}
        />
      </div>

      <div className="mt-5">
        {conteudoResultados}
      </div>

      <div className="mt-4">
        <HistoricoSimulacoes historico={historico} />
      </div>

    </div>
  )
}

export default CapturaDados