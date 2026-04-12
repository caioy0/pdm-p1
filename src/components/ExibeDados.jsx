// src/components/ExibeDados.jsx

const ExibeDados = ({
  valorFinal = 0,
  numAportes = 0,
  jurosAcumulados = 0,
  rentabilidade = 0,
}) => {
  return (
    <div className="mt-4">
      <h4 className="text-center mb-3 text-success">Resultados da simulacao</h4>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className="card border-success h-100 text-center">
            <div className="card-body">
              <p className="text-muted mb-1 small">Valor final acumulado</p>
              <h4 className="text-success mb-0">
                R$ {Number(valorFinal).toLocaleString('pt-BR')}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card h-100 text-center">
            <div className="card-body">
              <p className="text-muted mb-1 small">Numero de aportes</p>
              <h4 className="mb-0">{numAportes}</h4>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card border-primary h-100 text-center">
            <div className="card-body">
              <p className="text-muted mb-1 small">Juros acumulados</p>
              <h4 className="text-primary mb-0">
                R$ {Number(jurosAcumulados).toLocaleString('pt-BR')}
              </h4>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card border-info h-100 text-center">
            <div className="card-body">
              <p className="text-muted mb-1 small">Rentabilidade</p>
              <h4 className="text-info mb-0">{rentabilidade}%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExibeDados
