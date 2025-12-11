import { useState } from 'react';
import { Heart, Activity } from 'lucide-react';

interface TestStep5Props {
  onNext: (data: { 
    deseoSexual: string; 
    libidoCambios: string;
    cicloMenstrual?: string;
    sintomasMenstruales?: string;
  }) => void;
  genero: string;
}

export function TestStep5({ onNext, genero }: TestStep5Props) {
  const [deseoSexual, setDeseoSexual] = useState('');
  const [libidoCambios, setLibidoCambios] = useState('');
  const [cicloMenstrual, setCicloMenstrual] = useState('');
  const [sintomasMenstruales, setSintomasMenstruales] = useState('');

  const esMujer = genero === 'femenino';

  const handleSubmit = () => {
    if (deseoSexual && libidoCambios) {
      if (esMujer && (!cicloMenstrual || !sintomasMenstruales)) return;
      
      onNext({ 
        deseoSexual, 
        libidoCambios,
        ...(esMujer && { cicloMenstrual, sintomasMenstruales })
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-black/10 mb-6">
            <span className="text-sm">Paso 5 de 7</span>
          </div>
          <h2>Deseo sexual y hormonas</h2>
          <p style={{ color: '#666' }}>
            La luz artificial nocturna afecta la producción de testosterona, estrógeno y progesterona, impactando tu libido y equilibrio hormonal.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Heart size={36} />
          <Activity size={36} />
        </div>

        <div className="space-y-8">
          {/* Deseo sexual actual */}
          <div>
            <h3 className="mb-4">¿Cómo describirías tu deseo sexual actualmente?</h3>
            <div className="space-y-3">
              {[
                { value: 'alto', label: 'Alto - Sin cambios notables' },
                { value: 'normal', label: 'Normal - Estable' },
                { value: 'bajo', label: 'Bajo - Ha disminuido en los últimos meses' },
                { value: 'muy-bajo', label: 'Muy bajo o ausente' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setDeseoSexual(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    deseoSexual === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    deseoSexual === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cambios en libido */}
          <div>
            <h3 className="mb-4">¿Notaste cambios en tu libido en el último año?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'sin-cambios', label: 'Sin cambios' },
                { value: 'disminucion', label: 'Disminución' },
                { value: 'disminucion-importante', label: 'Disminución importante' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setLibidoCambios(option.value)}
                  className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                    libidoCambios === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    libidoCambios === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preguntas específicas para mujeres */}
          {esMujer && (
            <>
              <div className="border-t-2 border-black/10 pt-6">
                <p className="text-sm mb-4" style={{ color: '#666' }}>
                  Preguntas adicionales para mujeres
                </p>
                
                <div className="space-y-6">
                  {/* Ciclo menstrual */}
                  <div>
                    <h3 className="mb-4">¿Tu ciclo menstrual es regular?</h3>
                    <div className="space-y-3">
                      {[
                        { value: 'regular', label: 'Sí, muy regular' },
                        { value: 'irregular', label: 'Irregular o con variaciones' },
                        { value: 'muy-irregular', label: 'Muy irregular o ausente' },
                        { value: 'no-aplica', label: 'No aplica (menopausia, etc.)' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setCicloMenstrual(option.value)}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                            cicloMenstrual === option.value
                              ? 'border-black bg-white shadow-md'
                              : 'border-black/10 bg-white hover:border-black/30'
                          }`}
                          style={
                            cicloMenstrual === option.value
                              ? { borderColor: 'var(--primary)' }
                              : {}
                          }
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Síntomas menstruales */}
                  <div>
                    <h3 className="mb-4">¿Experimentás síntomas premenstruales intensos?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { value: 'pocos', label: 'Pocos o ninguno' },
                        { value: 'moderados', label: 'Moderados' },
                        { value: 'intensos', label: 'Intensos' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSintomasMenstruales(option.value)}
                          className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                            sintomasMenstruales === option.value
                              ? 'border-black bg-white shadow-md'
                              : 'border-black/10 bg-white hover:border-black/30'
                          }`}
                          style={
                            sintomasMenstruales === option.value
                              ? { borderColor: 'var(--primary)' }
                              : {}
                          }
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              disabled={
                !deseoSexual || 
                !libidoCambios || 
                (esMujer && (!cicloMenstrual || !sintomasMenstruales))
              }
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
