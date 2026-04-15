// src/components/CapturaDados.jsx
import { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber';
import ExibeDados from './ExibeDados.jsx'
import HistoricoSimulacoes from './HistoricoSimulacoes.jsx'

const CapturaDados = () => {
  const [valorInicial, setValorInicial] = useState(0)
  const [valorAporte, setValorAporte] = useState(0)
  const [taxaJuros, setTaxaJuros] = useState(0)
  const [periodo, setPeriodo] = useState(0)
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
    setValorInicial(0)
    setValorAporte(0)
    setTaxaJuros(0)
    setPeriodo(0)
    setResultados(null)
  }

  return (
    <div>
      <div
        className="mt-3 p-3"
        style={{
          margin: 'auto',
          maxWidth: '768px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
        }}
      >
        <input
          placeholder="Valor inicial"
          type="number"
          className="form-control mb-2"
          value={valorInicial}
          onChange={(e) => setValorInicial(e.target.value)}
        />

        <input
          placeholder="Aporte mensal"
          type="number"
          className="form-control mb-2"
          value={valorAporte}
          onChange={(e) => setValorAporte(e.target.value)}
        />

        {/* <input
          placeholder="Taxa de juros (% a.a.)"
          type="number"
          className="form-control mb-2"
          value={taxaJuros}
          onChange={(e) => setTaxaJuros(e.target.value)}
        /> */}
        <InputNumber placeholder="Taxa de juros (% a.a.)" 
        value={taxaJuros} onValueChange={(e) => setTaxaJuros(e.value)} suffix="%" 
        showButtons buttonLayout="horizontal" step={0.25}
        decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" 
        incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"/>

        <input
          placeholder="Periodo (meses)"
          type="number"
          className="form-control mb-3"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-center gap-2 mt-3">
        <button className="btn btn-primary px-4" onClick={calcular}>
          Calcular
        </button>

        <button className="btn btn-secondary px-4" onClick={limpar}>
          Limpar
        </button>
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