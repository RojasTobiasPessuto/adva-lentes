import { useState } from 'react';
import { Moon, CloudMoon } from 'lucide-react';

interface TestStep3Props {
  onNext: (data: { horasDormir: string; calidadSueno: string; pantallasAntesDomir: string }) => void;
}

export function TestStep3({ onNext }: TestStep3Props) {
  const [horasDormir, setHorasDormir] = useState('');
  const [calidadSueno, setCalidadSueno] = useState('');
  const [pantallasAntesDomir, setPantallasAntesDomir] = useState('');

  const handleSubmit = () => {
    if (horasDormir && calidadSueno && pantallasAntesDomir) {
      onNext({ horasDormir, calidadSueno, pantallasAntesDomir });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-black/10 mb-6">
            <span className="text-sm">Paso 3 de 7</span>
          </div>
          <h2>Tu sueño y tu descanso real</h2>
          <p style={{ color: '#666' }}>
            La melatonina se suprime con la luz azul, retrasando tu reloj biológico y afectando la calidad del sueño profundo.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Moon size={36} />
          <CloudMoon size={36} />
        </div>

        <div className="space-y-8">
          {/* Horas de sueño */}
          <div>
            <h3 className="mb-4">¿Cuántas horas dormís por noche?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: '<5', label: 'Menos de 5h' },
                { value: '5-6', label: '5-6 horas' },
                { value: '7-8', label: '7-8 horas' },
                { value: '8+', label: 'Más de 8h' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setHorasDormir(option.value)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    horasDormir === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    horasDormir === option.value
                      ? { borderColor: 'var(--secondary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Calidad del sueño */}
          <div>
            <h3 className="mb-4">¿Cómo calificarías tu calidad de sueño?</h3>
            <div className="space-y-3">
              {[
                { value: 'excelente', label: 'Excelente - Me despierto descansado/a' },
                { value: 'buena', label: 'Buena - Generalmente duermo bien' },
                { value: 'regular', label: 'Regular - Me cuesta conciliar el sueño o me despierto cansado/a' },
                { value: 'mala', label: 'Mala - Insomnio frecuente, sueño fragmentado' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setCalidadSueno(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    calidadSueno === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    calidadSueno === option.value
                      ? { borderColor: 'var(--secondary)' }
                      : {}
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        calidadSueno === option.value ? '' : 'border-black/20'
                      }`}
                      style={
                        calidadSueno === option.value
                          ? { background: 'var(--secondary)', borderColor: 'var(--secondary)' }
                          : {}
                      }
                    >
                      {calidadSueno === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span>{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pantallas antes de dormir */}
          <div>
            <h3 className="mb-4">¿Usás pantallas antes de dormir?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'nunca', label: 'Nunca o rara vez' },
                { value: 'a-veces', label: 'A veces' },
                { value: 'siempre', label: 'Casi siempre' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPantallasAntesDomir(option.value)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    pantallasAntesDomir === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    pantallasAntesDomir === option.value
                      ? { borderColor: 'var(--secondary)' }
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
              disabled={!horasDormir || !calidadSueno || !pantallasAntesDomir}
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
