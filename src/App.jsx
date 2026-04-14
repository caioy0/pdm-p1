import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CapturaDados from './components/CapturaDados.jsx'
import ExibeDados from './components/ExibeDados.jsx'
import HistoricoSimulacoes from './components/HistoricoSimulacoes.jsx'
  
const App = () => {
  const [valorInicial, setValorInicial] = useState(0)
  const [valorAporte, setValorAporte] = useState(0)
  const [taxaJuros, setTaxaJuros] = useState(0)
  const [periodo, setPeriodo] = useState(0)
  const [resultados, setResultados] = useState(null)
  const [historico, setHistorico] = useState([])

  const calcular = () => {
    const vi = Number(valorInicial)
    const va = Number(valorAporte)
    const tj = Number(taxaJuros) / 100 / 12
    const n = Number(periodo)

    if (vi < 0 || va < 0 || tj < 0 || n <= 0) {
      alert('Por favor, preencha valores validos!')
      return
    }

    let valorFinal = vi * Math.pow(1 + tj, n)
    if (tj > 0) {
      valorFinal += va * ((Math.pow(1 + tj, n) - 1) / tj)
    } else {
      valorFinal += va * n
    }

    const totalAportado = vi + va * n
    const jurosAcumulados = valorFinal - totalAportado
    const rentabilidade = totalAportado > 0 ? ((valorFinal / totalAportado) - 1) * 100 : 0

    const novoResultado = {
      valorFinal: Number(valorFinal.toFixed(2)),
      numAportes: n,
      jurosAcumulados: Number(jurosAcumulados.toFixed(2)),
      rentabilidade: Number(rentabilidade.toFixed(2)),
    }

    setResultados(novoResultado)
    setHistorico([
    ...historico,
    { valorFinal: novoResultado.valorFinal, dataHora: new Date() }
  ])
  }
  
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="h3 mb-0">Hello, Investimentos</h1>

              <CapturaDados
                valorInicial={valorInicial}
                setValorInicial={setValorInicial}
                valorAporte={valorAporte}
                setValorAporte={setValorAporte}
                taxaJuros={taxaJuros}
                setTaxaJuros={setTaxaJuros}
                periodo={periodo}
                setPeriodo={setPeriodo}
                calcular={calcular}
              />

              {resultados && (
                <ExibeDados
                  valorFinal={resultados.valorFinal}
                  numAportes={resultados.numAportes}
                  jurosAcumulados={resultados.jurosAcumulados}
                  rentabilidade={resultados.rentabilidade}
                />
              )}
              <HistoricoSimulacoes historico={historico} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
