// src/components/ExibeDados.jsx
const ExibeDados = ({
  valorFinal = null,
  numAportes = null,
  jurosAcumulados = null,
  rentabilidade = null,
  totalInvestido = null,
}) => {
  return (
    <div className="mt-5">
      <div className="card shadow-2 border-round p-4 bg-light">

        <h4 className="text-center mb-4 "> Resultados da simulação </h4>

        <div className="flex justify-content-center mb-4">
          <div className="w-full md:w-6">
            <div className="card border-1 border-success text-center p-3">
              <p className="text-500 mb-1">Valor final acumulado</p>
              <h2 className="text-success m-0">
                R$ {Number(valorFinal)}
              </h2>
            </div>
          </div>
        </div>

        <div className="grid">

          <div className="col-12 md:col-6">
            <div className="card border-1 border-green-400 text-center p-3">
              <p className="text-500 mb-1">Total investido</p>
              <h4 className="m-0">R$ {Number(totalInvestido)}</h4>
            </div>
          </div>

          <div className="col-12 md:col-6">
            <div className="card border-1 border-primary text-center p-3">
              <p className="text-500 mb-1">Juros acumulados</p>
              <h4 className="text-primary m-0">
                R$ {Number(jurosAcumulados)}
              </h4>
            </div>
          </div>

          <div className="col-12 md:col-6">
            <div className="card text-center p-3">
              <p className="text-500 mb-1">Nº de aportes</p>
              <h4 className="m-0">{numAportes}</h4>
            </div>
          </div>

          <div className="col-12 md:col-6">
            <div className="card border-1 border-blue-400 text-center p-3">
              <p className="text-500 mb-1">Rentabilidade</p>
              <h4 className="text-blue-500 m-0">
                {rentabilidade}%
              </h4>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ExibeDados