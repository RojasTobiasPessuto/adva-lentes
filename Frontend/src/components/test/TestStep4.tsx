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
          <h2>Tu energía, enfoque y estado de ánimo</h2>
          <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px' }}>
            Cuando tus ritmos circadianos se rompen, tu dopamina y otras hormonas dejan de seguir su ritmo natural. Aparece fatiga constante, menos motivación, más ansiedad y caen tu foco y claridad mental.
          </p>
          <p style={{ color: '#999', fontSize: '0.875rem', marginTop: '12px' }}>
            <a 
              href="https://pubmed.ncbi.nlm.nih.gov/28780783/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#999', textDecoration: 'underline', marginRight: '12px' }}
            >
              Fuente 1: PubMed
            </a>
            <a 
              href="https://pubmed.ncbi.nlm.nih.gov/32066704/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#999', textDecoration: 'underline' }}
            >
              Fuente 2: PubMed
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Zap size={36} />
          <BrainCircuit size={36} />
          <Frown size={36} />
        </div>

        <div className="space-y-8">
          {/* Pregunta 1: Nivel de energía */}
          <div>
            <h3 className="mb-4">Durante el día, ¿cómo sentís tu nivel de energía?</h3>
            <div className="space-y-3">
              {[
                { value: 'alta-estable', label: 'Alta y estable' },
                { value: 'caida-tarde', label: 'Arranco bien pero me caigo fuerte a la tarde' },
                { value: 'cansado-todo-dia', label: 'Estoy cansado casi todo el día' },
                { value: 'necesito-estimulantes', label: 'Necesito café / estimulantes todo el tiempo para rendir' },
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

          {/* Pregunta 2: Concentración */}
          <div>
            <h3 className="mb-4">¿Con qué frecuencia sentís dificultad para concentrarte o mantener el foco?</h3>
            <div className="space-y-3">
              {[
                { value: 'casi-nunca', label: 'Casi nunca' },
                { value: 'a-veces', label: 'A veces' },
                { value: 'muy-seguido', label: 'Muy seguido' },
                { value: 'casi-siempre', label: 'Casi siempre' },
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

          {/* Pregunta 3: Estado de ánimo */}
          <div>
            <h3 className="mb-4">En las últimas semanas, ¿cómo describirías tu estado de ánimo general?</h3>
            <div className="space-y-3">
              {[
                { value: 'equilibrado', label: 'Me siento equilibrado y de buen ánimo' },
                { value: 'algo-irritable', label: 'Algo irritable o ansioso, pero manejable' },
                { value: 'bastante-irritable', label: 'Bastante irritable, ansioso o con bajones frecuentes' },
                { value: 'muy-irritable', label: 'Muy irritable, ansioso o con sensación de apatía/decaimiento' },
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