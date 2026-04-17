// src/components/HistoricoSimulacoes.jsx
const HistoricoSimulacoes = ({ historico = [] }) => {

  return (
    <div className="surface-card border-round shadow-2 p-4 mt-4">
      <h4 className="mb-3 flex align-items-center gap-2">
        <i className="pi pi-history"></i>
        Histórico de simulações
      </h4>
      {historico.length > 0 && (
        <p className="p-tag p-tag-info flex align-items-center gap-2">
          <i className="pi pi-list"></i>
          {historico.length} simulações
        </p>
      )}

      {historico.length === 0 && (
        <p className="text-500 mb-0">Nenhuma simulacao realizada.</p>
      )}

      {historico.length > 0 && (
        <div className="flex flex-column gap-2">
          {historico.map((item, index) => (
            <div key={index} className="border-1 surface-border border-round p-3">
              <p className="text-sm text-500">
                <i className="pi pi-dollar mr-2"></i>
                Valor final:
              </p> R$ {Number(item.valorFinal).toFixed(2)}
              <br />
              <p className="text-sm text-500 mt-2">
                <i className="pi pi-clock mr-2"></i>
                Data/Hora:
              </p> {item.dataHora.toLocaleTimeString()}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HistoricoSimulacoes