// src/components/HistoricoSimulacoes.jsx
import { useState, useEffect } from 'react'

const HistoricoSimulacoes = ({ novoResultado }) => {
  const [historico, setHistorico] = useState([])

  useEffect(() => {
    if (novoResultado) {
      setHistorico((prev) => [
        ...prev,
        { valorFinal: novoResultado.valorFinal, dataHora: new Date() },
      ])
    }
  }, [novoResultado])

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h4 className="mb-3">Historico de simulações</h4>
        {historico.length > 0 && (
            <p className="bg-primary ms-2">
              {historico.length} - simulações
            </p>
          )}

        {historico.length === 0 && (
          <p className="text-muted mb-0">Nenhuma simulacao realizada.</p>
        )}

        {historico.length > 0 && (
          <ul className="list-group">
            {historico.map((item, index) => (
              <li key={index} className="list-group-item">
                <p>Valor final:</p> R$ {Number(item.valorFinal).toLocaleString('pt-BR')}
                <br />
                <p>Data/Hora:</p> {item.dataHora.toLocaleString('pt-BR')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default HistoricoSimulacoes