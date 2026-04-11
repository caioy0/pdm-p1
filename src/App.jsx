import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CapturarDados from './components/CapturarDados.jsx'

const App = () => {
  const [calculo, setCalculo] = useState(0)
  // const [aportemensal, setEntrada] = useState(0)
  // const [taxadejuros, setEntrada] = useState(0)
  // const [periodo, setEntrada] = useState(0)
  // const [calculo, setEntrada] = useState(null)
  // const [valorfinal, setEntrada] = useState(null)
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="h3 mb-0">Hello, Investimentos</h1>
              <CapturarDados setCalculo={setCalculo}
              calculo={calculo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App