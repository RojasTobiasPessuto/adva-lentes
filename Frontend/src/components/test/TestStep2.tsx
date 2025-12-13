import { useState } from 'react';
import { Monitor, Smartphone, Tv } from 'lucide-react';

interface TestStep2Props {
  onNext: (data: { 
    horasPantallas: string; 
    pantallasAntesDomir: string;
    ambienteLuzArtificial: string;
  }) => void;
}

export function TestStep2({ onNext }: TestStep2Props) {
  const [horasPantallas, setHorasPantallas] = useState('');
  const [pantallasAntesDomir, setPantallasAntesDomir] = useState('');
  const [ambienteLuzArtificial, setAmbienteLuzArtificial] = useState('');

  const handleSubmit = () => {
    if (horasPantallas && pantallasAntesDomir && ambienteLuzArtificial) {
      onNext({ horasPantallas, pantallasAntesDomir, ambienteLuzArtificial });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-black/10 mb-6">
            <span className="text-sm">Paso 2 de 7</span>
          </div>
          <h2>Tu exposición diaria a pantallas</h2>
          <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px' }}>
            La mayoría de las personas pasan cerca del 90 % del tiempo en espacios cerrados — hogares, oficinas, transporte, locales. Esto significa que, durante casi todo el día y noche, estamos rodeados de luz artificial: pantallas, lámparas LED, ambientes sin luz natural. Esa luz chatarra altera tus ritmos circadianos, dispara hormonas del estrés como el cortisol y termina afectando cómo dormís, cómo rendís, tu energía, tu capacidad de enfoque e incluso tu desarrollo muscular.
          </p>
          <p style={{ color: '#999', fontSize: '0.875rem', marginTop: '12px' }}>
            <a 
              href="https://www.mdpi.com/2075-1729/13/10/1968" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#999', textDecoration: 'underline' }}
            >
              Fuente: MDPI - Life Journal
            </a>
          </p>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Monitor size={36} />
          <Smartphone size={36} />
          <Tv size={36} />
        </div>

        <div className="space-y-8">
          {/* Pregunta 1: Horas diarias */}
          <div>
            <h3 className="mb-4">¿Cuántas horas al día, en promedio, estás frente a una pantalla (celular, PC, TV, tablet)?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: 'menos-3', label: 'Menos de 3 horas' },
                { value: '3-6', label: 'Entre 3 y 6 horas' },
                { value: '6-9', label: 'Entre 6 y 9 horas' },
                { value: 'mas-9', label: 'Más de 9 horas' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setHorasPantallas(option.value)}
                  className={`p-5 rounded-xl border-2 transition-all text-left ${
                    horasPantallas === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    horasPantallas === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${
                        horasPantallas === option.value ? '' : 'border-black/20'
                      }`}
                      style={
                        horasPantallas === option.value
                          ? { background: 'var(--primary)', borderColor: 'var(--primary)' }
                          : {}
                      }
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pregunta 2: Pantallas antes de dormir */}
          <div>
            <h3 className="mb-4">En las 2 horas antes de dormir, normalmente…</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: 'casi-no', label: 'Casi no uso pantallas' },
                { value: 'un-poco', label: 'Uso un poco el celular / TV (menos de 1 hora)' },
                { value: 'hasta-dormir', label: 'Estoy con el celular o la computadora hasta el momento de dormir' },
                { value: 'me-duermo', label: 'Me quedo dormido con la pantalla encendida' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPantallasAntesDomir(option.value)}
                  className={`p-5 rounded-xl border-2 transition-all text-left ${
                    pantallasAntesDomir === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    pantallasAntesDomir === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${
                        pantallasAntesDomir === option.value ? '' : 'border-black/20'
                      }`}
                      style={
                        pantallasAntesDomir === option.value
                          ? { background: 'var(--primary)', borderColor: 'var(--primary)' }
                          : {}
                      }
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pregunta 3: Ambiente laboral/estudio */}
          <div>
            <h3 className="mb-4">¿Trabajás o estudiás en ambientes con luz artificial intensa (oficina, pantallas grandes, luces blancas)?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: 'casi-nunca', label: 'Casi nunca' },
                { value: 'a-veces', label: 'A veces' },
                { value: 'casi-todos-dias', label: 'Casi todos los días' },
                { value: 'todo-dia', label: 'Todo el día, todos los días' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAmbienteLuzArtificial(option.value)}
                  className={`p-5 rounded-xl border-2 transition-all text-left ${
                    ambienteLuzArtificial === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    ambienteLuzArtificial === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${
                        ambienteLuzArtificial === option.value ? '' : 'border-black/20'
                      }`}
                      style={
                        ambienteLuzArtificial === option.value
                          ? { background: 'var(--primary)', borderColor: 'var(--primary)' }
                          : {}
                      }
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit button */}
          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              disabled={!horasPantallas || !pantallasAntesDomir || !ambienteLuzArtificial}
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