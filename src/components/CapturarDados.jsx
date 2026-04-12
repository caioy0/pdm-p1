// src/components/CapturarDados.jsx

const CapturarDados = ({
  valorInicial,
  setValorInicial,
  valorAporte,
  setValorAporte,
  taxaJuros,
  setTaxaJuros,
  periodo,
  setPeriodo,
  calcular,           
}) => {
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
        <input
          placeholder="Taxa de juros (% a.a.)"
          type="number"
          className="form-control mb-2"
          value={taxaJuros}
          onChange={(e) => setTaxaJuros(e.target.value)}
        />
        <input
          placeholder="Período (meses)"
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
        
        <button 
          className="btn btn-secondary px-4" 
          onClick={() => {
            // Limpa tudo
            setValorInicial(0)
            setValorAporte(0)
            setTaxaJuros(0)
            setPeriodo(0)
          }}
        >
          Limpar
        </button>
      </div>
    </div>
  )
}

export default CapturarDados