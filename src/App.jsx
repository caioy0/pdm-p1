import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CapturarDados from './components/CapturarDados.jsx'
import ExibeDados from './components/ExibeDados.jsx'

const App = () => {
  const [valorInicial, setValorInicial] = useState(0)
  const [valorAporte, setValorAporte] = useState(0)
  const [taxaJuros, setTaxaJuros] = useState(0)
  const [periodo, setPeriodo] = useState(0)
  
  const [resultados, setResultados] = useState(null)

  const calcular = () => {
    const vi = Number(valorInicial)
    const va = Number(valorAporte)
    const tj = Number(taxaJuros) / 100 / 12
    const n = Number(periodo)

    if (vi < 0 || va < 0 || tj < 0 || n <= 0) {
      alert('Por favor, preencha valores válidos!')
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
    const rentabilidade = totalAportado > 0 
      ? ((valorFinal / totalAportado) - 1) * 100 
      : 0

    setResultados({
      valorFinal: valorFinal.toFixed(2),
      numAportes: n,
      jurosAcumulados: jurosAcumulados.toFixed(2),
      rentabilidade: rentabilidade.toFixed(2)
    })
  }

  let conteudoResultados = null
  if (resultados) {
    conteudoResultados = (
      <ExibeDados
        valorFinal={resultados.valorFinal}
        numAportes={resultados.numAportes}
        jurosAcumulados={resultados.jurosAcumulados}
        rentabilidade={resultados.rentabilidade}
      />
    )
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="h3 mb-0">Hello, Investimentos</h1>
              
              <CapturarDados
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

              {conteudoResultados}
              <div className="col-12 col-lg-6">
                  <ExibeDados resultado={resultado} />

                  <div className="card mt-4">
                    <div className="card-body">
                      <h4 className="mb-3">Historico de simulacoes</h4>

                      {historico.length === 0 && (
                        <p className="text-muted mb-0">Nenhuma simulacao realizada.</p>
                      )}

                      {historico.length > 0 && (
                        <ul className="list-group">
                          {historico.map((item, index) => (
                            <li key={index} className="list-group-item">
                              <strong>Valor final:</strong> R$ {item.valorFinal.toFixed(2)}
                              <br />
                              <strong>Data/Hora:</strong> {item.dataHora}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App