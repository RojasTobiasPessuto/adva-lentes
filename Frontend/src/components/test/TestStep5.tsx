import { useState } from 'react';
import { Heart, Activity } from 'lucide-react';

interface TestStep5Props {
  onNext: (data: { 
    deseoSexual: string; 
    vitalidadFisica: string;
    regularidadCiclo?: string;
    sintomasMenstruales?: string;
    energiaCiclo?: string;
    fertilidad?: string;
  }) => void;
  genero: string;
}

export function TestStep5({ onNext, genero }: TestStep5Props) {
  const [deseoSexual, setDeseoSexual] = useState('');
  const [vitalidadFisica, setVitalidadFisica] = useState('');
  const [regularidadCiclo, setRegularidadCiclo] = useState('');
  const [sintomasMenstruales, setSintomasMenstruales] = useState('');
  const [energiaCiclo, setEnergiaCiclo] = useState('');
  const [fertilidad, setFertilidad] = useState('');

  const esMujer = genero === 'femenino';

  const handleSubmit = () => {
    if (deseoSexual && vitalidadFisica) {
      onNext({ 
        deseoSexual, 
        vitalidadFisica,
        ...(esMujer && { regularidadCiclo, sintomasMenstruales, energiaCiclo, fertilidad })
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
          <h2>Tu deseo sexual y tu eje hormonal</h2>
          <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px' }}>
            La luz artificial nocturna no solo afecta el sueño. En mujeres puede alterar el ciclo menstrual y la fertilidad; en hombres reduce la producción de testosterona y la calidad del esperma. En ambos casos, se ve afectado el deseo sexual, el rendimiento y la vitalidad.
          </p>
          <div style={{ color: '#999', fontSize: '0.875rem', marginTop: '12px' }}>
            <div>
              <strong>Fuentes: </strong>{' '}
              <a 
                href="https://www.sciencedirect.com/science/article/abs/pii/S0269749123019292?via%3Dihub" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#999', textDecoration: 'underline', marginRight: '8px' }}
              >
                Sciencedirect
              </a>
              <a 
                href="https://www.mdpi.com/1660-4601/20/4/3195" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#999', textDecoration: 'underline' }}
              >
                Mdpi
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Heart size={36} />
          <Activity size={36} />
        </div>

        <div className="space-y-8">
          {/* Pregunta 1: Deseo sexual */}
          <div>
            <h3 className="mb-4">En los últimos meses, ¿cómo describirías tu deseo sexual comparado con otros momentos de tu vida?</h3>
            <div className="space-y-3">
              {[
                { value: 'igual-mejor', label: 'Igual o mejor que antes' },
                { value: 'poco-bajo', label: 'Un poco más bajo' },
                { value: 'notablemente-bajo', label: 'Notablemente más bajo' },
                { value: 'casi-inexistente', label: 'Casi inexistente' },
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

          {/* Pregunta 2: Vitalidad física */}
          <div>
            <h3 className="mb-4">¿Notás cambios en tu vitalidad física (fuerza, ganas de moverte, recuperación después de entrenar o de un día intenso)?</h3>
            <div className="space-y-3">
              {[
                { value: 'fuerte-recupero', label: 'Me siento fuerte y recupero bien' },
                { value: 'canso-rapido', label: 'Me canso más rápido que antes' },
                { value: 'cuesta-recuperar', label: 'Me cuesta mucho recuperarme, vivo agotado' },
                { value: 'sin-energia', label: 'Prácticamente no tengo energía para entrenar o moverme' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setVitalidadFisica(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    vitalidadFisica === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    vitalidadFisica === option.value
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
                <p className="mb-4" style={{ color: '#666', fontSize: '0.95rem' }}>
                  <strong>APARTADO SOLO PARA MUJERES</strong>
                </p>
                
                <div className="space-y-6">
                  {/* 1. Regularidad del ciclo */}
                  <div>
                    <h3 className="mb-4">En los últimos meses, ¿cómo estuvo la regularidad de tu ciclo menstrual?</h3>
                    <div className="space-y-3">
                      {[
                        { value: 'regular', label: 'Se mantiene regular como siempre' },
                        { value: 'adelanta-atrasa', label: 'A veces se adelanta o se atrasa' },
                        { value: 'irregular', label: 'Es cada vez más irregular' },
                        { value: 'no-anticipar', label: 'Prácticamente no puedo anticipar cuándo me va a venir' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setRegularidadCiclo(option.value)}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                            regularidadCiclo === option.value
                              ? 'border-black bg-white shadow-md'
                              : 'border-black/10 bg-white hover:border-black/30'
                          }`}
                          style={
                            regularidadCiclo === option.value
                              ? { borderColor: 'var(--secondary)' }
                              : {}
                          }
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Síntomas premenstruales */}
                  <div>
                    <h3 className="mb-4">¿Notaste cambios en los síntomas premenstruales o durante la menstruación?</h3>
                    <div className="space-y-3">
                      {[
                        { value: 'igual', label: 'No, siguen igual' },
                        { value: 'poco-intensos', label: 'Un poco más intensos que antes' },
                        { value: 'muy-intensos', label: 'Mucho más intensos (dolor, irritabilidad, insomnio, retención, etc.)' },
                        { value: 'cambiaron-notable', label: 'Cambiaron de forma notable y no entiendo por qué' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSintomasMenstruales(option.value)}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                            sintomasMenstruales === option.value
                              ? 'border-black bg-white shadow-md'
                              : 'border-black/10 bg-white hover:border-black/30'
                          }`}
                          style={
                            sintomasMenstruales === option.value
                              ? { borderColor: 'var(--secondary)' }
                              : {}
                          }
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Energía a lo largo del ciclo */}
                  <div>
                    <h3 className="mb-4">¿Cómo describirías tu energía a lo largo del ciclo?</h3>
                    <div className="space-y-3">
                      {[
                        { value: 'estable', label: 'Tengo energía estable casi todo el mes' },
                        { value: 'altibajos', label: 'Tengo altibajos más marcados que antes' },
                        { value: 'fatiga', label: 'Siento fatiga la mayor parte del ciclo' },
                        { value: 'agotada', label: 'Estoy agotada casi todos los días' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setEnergiaCiclo(option.value)}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                            energiaCiclo === option.value
                              ? 'border-black bg-white shadow-md'
                              : 'border-black/10 bg-white hover:border-black/30'
                          }`}
                          style={
                            energiaCiclo === option.value
                              ? { borderColor: 'var(--secondary)' }
                              : {}
                          }
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Fertilidad (opcional) */}
                  <div>
                    <h3 className="mb-4">
                      En cuanto a fertilidad o búsqueda de embarazo, ¿notaste algo distinto?
                      <span style={{ color: '#999', fontSize: '0.875rem', display: 'block', marginTop: '4px' }}>
                        (Si no aplica, podés saltear esta pregunta)
                      </span>
                    </h3>
                    <div className="space-y-3">
                      {[
                        { value: 'no-cambios', label: 'No noté cambios' },
                        { value: 'dificil-identificar', label: 'Me cuesta identificar mis días fértiles' },
                        { value: 'irregulares', label: 'Mis ciclos son tan irregulares que se complica planificar' },
                        { value: 'dificultades', label: 'Estoy notando dificultades y no sé si puede estar relacionado' },
                        { value: 'no-aplica', label: 'No aplica / Prefiero no responder' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFertilidad(option.value)}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                            fertilidad === option.value
                              ? 'border-black bg-white shadow-md'
                              : 'border-black/10 bg-white hover:border-black/30'
                          }`}
                          style={
                            fertilidad === option.value
                              ? { borderColor: 'var(--secondary)' }
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
              disabled={!deseoSexual || !vitalidadFisica}
              className="px-12 py-4 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ background: 'var(--primary)' }}
            >
              Siguiente:
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}