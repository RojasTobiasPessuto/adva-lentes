import { useState } from 'react';
import { Moon, CloudMoon } from 'lucide-react';

interface TestStep3Props {
  onNext: (data: { horasDormir: string; calidadSueno: string; cansancioAlLevantar: string }) => void;
}

export function TestStep3({ onNext }: TestStep3Props) {
  const [horasDormir, setHorasDormir] = useState('');
  const [calidadSueno, setCalidadSueno] = useState('');
  const [cansancioAlLevantar, setCansancioAlLevantar] = useState('');

  const handleSubmit = () => {
    if (horasDormir && calidadSueno && cansancioAlLevantar) {
      onNext({ horasDormir, calidadSueno, cansancioAlLevantar });
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
          <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px' }}>
            La luz azul de las pantallas por la noche engaña a tu cerebro: le hace creer que todavía es de día. Eso frena la producción de melatonina, la hormona que inicia el sueño profundo. Cuando tus ritmos circadianos se desregulan, aumenta la inflamación, cae tu energía y tu cuerpo entra en modo estrés crónico.
          </p>
          <p style={{ color: '#999', fontSize: '0.875rem', marginTop: '12px' }}>
            <a 
              href="https://pubmed.ncbi.nlm.nih.gov/25526564/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#999', textDecoration: 'underline', marginRight: '12px' }}
            >
              Fuente 1: PubMed
            </a>
            <a 
              href="https://pubmed.ncbi.nlm.nih.gov/21164152/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#999', textDecoration: 'underline' }}
            >
              Fuente 2: PubMed
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Moon size={36} />
          <CloudMoon size={36} />
        </div>

        <div className="space-y-8">
          {/* Pregunta 1: Horas de sueño */}
          <div>
            <h3 className="mb-4">En promedio, ¿cuántas horas dormís por noche?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: 'menos-5', label: 'Menos de 5 horas' },
                { value: '5-7', label: 'Entre 5 y 7 horas' },
                { value: '7-9', label: 'Entre 7 y 9 horas' },
                { value: 'mas-9', label: 'Más de 9 horas' },
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

          {/* Pregunta 2: Calidad del sueño */}
          <div>
            <h3 className="mb-4">¿Cómo describirías la calidad de tu sueño?</h3>
            <div className="space-y-3">
              {[
                { value: 'profundo', label: 'Duermo profundo y me levanto descansado casi siempre' },
                { value: 'me-despierto', label: 'Me despierto 1–2 veces, pero me vuelvo a dormir fácil' },
                { value: 'me-cuesta', label: 'Me cuesta conciliar el sueño y me despierto varias veces' },
                { value: 'cansado', label: 'Me levanto cansado casi todos los días' },
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

          {/* Pregunta 3: Cansancio al levantarse */}
          <div>
            <h3 className="mb-4">¿Qué tan seguido te levantás sintiendo que seguís cansado o con "resaca de pantalla"?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: 'casi-nunca', label: 'Casi nunca' },
                { value: '1-2-veces', label: '1–2 veces por semana' },
                { value: '3-5-veces', label: '3–5 veces por semana' },
                { value: 'casi-todos-dias', label: 'Casi todos los días' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setCansancioAlLevantar(option.value)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    cansancioAlLevantar === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    cansancioAlLevantar === option.value
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
              disabled={!horasDormir || !calidadSueno || !cansancioAlLevantar}
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