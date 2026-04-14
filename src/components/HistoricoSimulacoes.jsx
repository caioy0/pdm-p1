const HistoricoSimulacoes = ({ historico }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h4 className="mb-3">Histórico de Simulações</h4>

        {historico.length === 0 && (
          <p className="text-muted mb-0">Nenhuma simulação realizada.</p>
        )}

        {historico.length > 0 && (
          <ul className="list-group">
            {historico.map((item, index) => (
              <li key={index} className="list-group-item">
                <strong>Valor final:</strong> R$ {Number(item.valorFinal).toLocaleString('pt-BR')}
                <br />
                <strong>Data/Hora:</strong> {item.dataHora.toLocaleString('pt-BR')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default HistoricoSimulacoes
