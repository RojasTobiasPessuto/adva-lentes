import { useState } from 'react';
import { Monitor, Smartphone, Tv } from 'lucide-react';

interface TestStep2Props {
  onNext: (data: { horasPantallas: string; dispositivosPrincipales: string }) => void;
}

export function TestStep2({ onNext }: TestStep2Props) {
  const [horasPantallas, setHorasPantallas] = useState('');
  const [dispositivosPrincipales, setDispositivosPrincipales] = useState('');

  const handleSubmit = () => {
    if (horasPantallas && dispositivosPrincipales) {
      onNext({ horasPantallas, dispositivosPrincipales });
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
          <p style={{ color: '#666' }}>
            La luz azul de las pantallas suprime la melatonina y altera tu ritmo circadiano natural.
          </p>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Monitor size={36} />
          <Smartphone size={36} />
          <Tv size={36} />
        </div>

        <div className="space-y-8">
          {/* Horas diarias */}
          <div>
            <h3 className="mb-4">¿Cuántas horas al día usás pantallas?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: '0-2', label: 'Menos de 2 horas', score: 0 },
                { value: '2-4', label: '2 a 4 horas', score: 1 },
                { value: '4-8', label: '4 a 8 horas', score: 2 },
                { value: '8+', label: 'Más de 8 horas', score: 3 },
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

          {/* Dispositivos principales */}
          <div>
            <h3 className="mb-4">¿Cuál es tu dispositivo principal?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: 'computadora', label: 'Computadora' },
                { value: 'smartphone', label: 'Smartphone' },
                { value: 'ambos', label: 'Ambos por igual' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setDispositivosPrincipales(option.value)}
                  className={`p-5 rounded-xl border-2 transition-all ${
                    dispositivosPrincipales === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    dispositivosPrincipales === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit button */}
          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              disabled={!horasPantallas || !dispositivosPrincipales}
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
