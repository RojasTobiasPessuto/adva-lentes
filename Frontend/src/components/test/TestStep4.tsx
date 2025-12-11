import { useState } from 'react';
import { Zap, BrainCircuit, Frown } from 'lucide-react';

interface TestStep4Props {
  onNext: (data: { nivelEnergia: string; concentracion: string; estadoAnimo: string }) => void;
}

export function TestStep4({ onNext }: TestStep4Props) {
  const [nivelEnergia, setNivelEnergia] = useState('');
  const [concentracion, setConcentracion] = useState('');
  const [estadoAnimo, setEstadoAnimo] = useState('');

  const handleSubmit = () => {
    if (nivelEnergia && concentracion && estadoAnimo) {
      onNext({ nivelEnergia, concentracion, estadoAnimo });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-black/10 mb-6">
            <span className="text-sm">Paso 4 de 7</span>
          </div>
          <h2>Energía, enfoque y estado de ánimo</h2>
          <p style={{ color: '#666' }}>
            Cuando tus ritmos circadianos se rompen, tu dopamina y otras hormonas dejan de seguir su ritmo natural. Aparece fatiga constante, menos motivación, más ansiedad y caen tu foco y claridad mental.
          </p>
          <p style={{ color: '#666' }}>
            https://pubmed.ncbi.nlm.nih.gov/28780783/
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Zap size={36} />
          <BrainCircuit size={36} />
          <Frown size={36} />
        </div>

        <div className="space-y-8">
          {/* Nivel de energía */}
          <div>
            <h3 className="mb-4">¿Cómo es tu nivel de energía durante el día?</h3>
            <div className="space-y-3">
              {[
                { value: 'alta', label: 'Alta y estable durante todo el día' },
                { value: 'variable', label: 'Variable, con picos y bajones' },
                { value: 'baja-manana', label: 'Baja por la mañana, mejor por la tarde/noche' },
                { value: 'baja-constante', label: 'Baja de manera constante, fatiga crónica' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setNivelEnergia(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    nivelEnergia === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    nivelEnergia === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Concentración */}
          <div>
            <h3 className="mb-4">¿Cómo describirías tu capacidad de concentración?</h3>
            <div className="space-y-3">
              {[
                { value: 'excelente', label: 'Excelente - Puedo mantener el foco sin problemas' },
                { value: 'buena', label: 'Buena - A veces me distraigo pero puedo volver al foco' },
                { value: 'dificil', label: 'Difícil - Me cuesta mantener la atención' },
                { value: 'muy-dificil', label: 'Muy difícil - Dispersión mental constante' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setConcentracion(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    concentracion === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    concentracion === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Estado de ánimo */}
          <div>
            <h3 className="mb-4">¿Cómo está tu estado de ánimo en general?</h3>
            <div className="space-y-3">
              {[
                { value: 'positivo', label: 'Positivo y estable' },
                { value: 'neutral', label: 'Neutral, sin grandes cambios' },
                { value: 'variable', label: 'Variable, con altibajos frecuentes' },
                { value: 'bajo', label: 'Bajo, con tendencia a la ansiedad o tristeza' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setEstadoAnimo(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    estadoAnimo === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    estadoAnimo === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              disabled={!nivelEnergia || !concentracion || !estadoAnimo}
              className="px-12 py-4 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ background: 'var(--primary)' }}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
