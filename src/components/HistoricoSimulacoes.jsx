// src/components/HistoricoSimulacoes.jsx
const HistoricoSimulacoes = ({ historico = [] }) => {

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h4 className="mb-3">Historico de simulações</h4>
        {historico.length > 0 && (
          <p className="p-tag p-tag-info flex align-items-center gap-2">
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
                <p>Valor final:</p> R$ {Number(item.valorFinal)}
                <br />
                <p>
                  <i className="pi pi-clock mr-2"></i>
                  Data/Hora:
                </p> {item.dataHora.toLocaleTimeString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default HistoricoSimulacoes
