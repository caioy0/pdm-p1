// src/components/CapturarDados.jsx
const CapturarDados = ({setCalculo, calculo}) => {

  return (
    <div>
      <div className="mt-2 bd-2 align-content-between fs-4 "
      style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
        
        <input placeholder="Valor incial" type="text" />
        <input placeholder="Aporte mensal" type="text" />
        <input placeholder="taxa de juros" type="text" />
        <input placeholder="Periodo" type="text" />
      
      </div>

      <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-primary"
            onClick={() => setCalculo((prev) => prev + 1)}
          >
            Calculo <i className="fas fa-plus"></i>
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setCalculo(0)}
          >
            Reiniciar
          </button>
        </div>
        <p>Numero: {calculo}</p>
    </div>
  )
}

export default CapturarDados