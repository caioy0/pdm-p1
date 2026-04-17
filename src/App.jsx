// src/App.jsx
import CapturaDados from './components/CapturaDados.jsx'

const App = () => {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="p-p-4 pg-2 col-12 col-md-8 col-lg-6">
          <div className="card border-responsive">
            <div className="card-body text-center">
              <h1 className="h3 mb-2">Hello, Investimentos</h1>
              <div class="flex flex-wrap justify-content-center">
                <CapturaDados />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App