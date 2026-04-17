// src/App.jsx
import CapturaDados from './components/CapturaDados.jsx'

const App = () => {
  return (
    <div className="min-h-screen flex justify-content-center align-items-center p-4">
      <div className="surface-card border-round shadow-3 p-4 w-full md:w-10 lg:w-6">
        <div className="text-center mb-4">
              <h1 className="text-2xl font-semibold m-0 flex align-items-center justify-content-center gap-2">
                <i className="pi pi-chart-line"></i>
                Hello, Investimentos
              </h1>
        </div>

        <div className="flex justify-content-center">
          <CapturaDados />
        </div>
      </div>
    </div>
  )
}

export default App