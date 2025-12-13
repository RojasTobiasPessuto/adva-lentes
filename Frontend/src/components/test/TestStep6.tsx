import { useState } from 'react';
import { Eye, AlertCircle, Sun } from 'lucide-react';

interface TestStep6Props {
  onNext: (data: { 
    sintomasFisicos: string[];
    aspectoFisico: string;
    visionAfectada: string[];
  }) => void;
}

export function TestStep6({ onNext }: TestStep6Props) {
  const [sintomasFisicos, setSintomasFisicos] = useState<string[]>([]);
  const [aspectoFisico, setAspectoFisico] = useState('');
  const [visionAfectada, setVisionAfectada] = useState<string[]>([]);

  const toggleSintomaFisico = (sintoma: string) => {
    if (sintoma === 'ninguno') {
      setSintomasFisicos(['ninguno']);
    } else {
      const filtered = sintomasFisicos.filter(s => s !== 'ninguno' && s !== sintoma);
      if (sintomasFisicos.includes(sintoma)) {
        setSintomasFisicos(filtered);
      } else {
        setSintomasFisicos([...filtered, sintoma]);
      }
    }
  };

  const toggleVisionAfectada = (opcion: string) => {
    if (opcion === 'igual') {
      setVisionAfectada(['igual']);
    } else {
      const filtered = visionAfectada.filter(v => v !== 'igual' && v !== opcion);
      if (visionAfectada.includes(opcion)) {
        setVisionAfectada(filtered);
      } else {
        setVisionAfectada([...filtered, opcion]);
      }
    }
  };

  const handleSubmit = () => {
    if ((sintomasFisicos.length > 0) && aspectoFisico && (visionAfectada.length > 0)) {
      onNext({ sintomasFisicos, aspectoFisico, visionAfectada });
    }
  };

  const sintomasFisicosOptions = [
    { value: 'dolor-cabeza', label: 'Dolor de cabeza o migrañas' },
    { value: 'ojos-secos', label: 'Ojos secos o irritados' },
    { value: 'vision-borrosa', label: 'Visión borrosa después de muchas horas de pantalla' },
    { value: 'dolor-cuello', label: 'Dolor de cuello o espalda por tensión' },
    { value: 'ninguno', label: 'Ninguno de los anteriores' },
  ];

  const visionAfectadaOptions = [
    { value: 'igual', label: 'Veo tan bien como siempre' },
    { value: 'vista-cansada', label: 'Me canso más de la vista al final del día' },
    { value: 'alejar-acercar', label: 'Necesito alejar o acercar el celular para leer mejor' },
    { value: 'empeora-pantallas', label: 'Mi visión empeora después de usar pantallas' },
    { value: 'cuesta-enfocar', label: 'Me cuesta enfocar rápido cuando paso de mirar algo lejos a algo cerca (o al revés)' },
    { value: 'sensible-luces', label: 'Soy más sensible a las luces fuertes que antes' },
    { value: 'luces-auto', label: 'Cuando conduzco de noche las luces de los autos me irritan mucho la vista' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-black/10 mb-6">
            <span className="text-sm">Paso 6 de 7</span>
          </div>
          <h2>Tus ojos, tu cuerpo y la luz</h2>
          <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px' }}>
            La luz azul (400–500 nm) es más energética que las longitudes de onda más largas como el rojo y puede inducir daño fotoquímico en los tejidos de la retina, principalmente a través de la generación de especies reactivas de oxígeno (ROS). La ciencia es clara: Cataratas, ojos cansados y degeneración macular son un síntoma de la toxicidad de la luz azul.
            No es 'solo un cansancio de ojos', es tu biología resistiendo daño físico.
          </p>
          <p style={{ color: '#999', fontSize: '0.875rem', marginTop: '12px' }}>
            <a 
              href="https://www.sciencedirect.com/science/article/abs/pii/S0014483518302926?via%3Dihub" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#999', textDecoration: 'underline', marginRight: '12px' }}
            >
              Fuente 1: ScienceDirect
            </a>
            <a 
              href="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC6288536&blobtype=pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#999', textDecoration: 'underline', marginRight: '12px' }}
            >
              Fuente 2: Europe PMC
            </a>
            <a 
              href="https://www.researchsquare.com/article/rs-9180/v1" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#999', textDecoration: 'underline' }}
            >
              Fuente 3: Research Square
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Eye size={36} />
          <AlertCircle size={36} />
          <Sun size={36} />
        </div>

        <div className="space-y-8">
          {/* Pregunta 1: Síntomas físicos al final del día */}
          <div>
            <h3 className="mb-4">¿Qué tan seguido sufrís de alguno de estos síntomas al final del día? (podés marcar varios)</h3>
            <div className="space-y-3">
              {sintomasFisicosOptions.map((option) => {
                const isSelected = sintomasFisicos.includes(option.value);
                
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => toggleSintomaFisico(option.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                      isSelected
                        ? 'border-black bg-white shadow-md'
                        : 'border-black/10 bg-white hover:border-black/30'
                    }`}
                    style={
                      isSelected
                        ? { borderColor: 'var(--secondary)' }
                        : {}
                    }
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                          isSelected ? '' : 'border-black/20'
                        }`}
                        style={
                          isSelected
                            ? { background: 'var(--secondary)', borderColor: 'var(--secondary)' }
                            : {}
                        }
                      >
                        {isSelected && (
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 5.5L5 9.5L13 1.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span>{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pregunta 2: Aspecto físico */}
          <div>
            <h3 className="mb-4">¿Sentís que tu aspecto físico (piel, ojeras, expresión de cansancio) empeoró en los últimos años por tu estilo de vida frente a pantallas?</h3>
            <div className="space-y-3">
              {[
                { value: 'igual', label: 'No, me veo igual' },
                { value: 'poco-ojeras', label: 'Un poco más de ojeras / cara de cansancio' },
                { value: 'bastante-peor', label: 'Bastante peor (ojeras marcadas, piel opaca, mirada apagada)' },
                { value: 'muy-deteriorado', label: 'Muy deteriorado comparado con antes' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAspectoFisico(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    aspectoFisico === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    aspectoFisico === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        aspectoFisico === option.value ? '' : 'border-black/20'
                      }`}
                      style={
                        aspectoFisico === option.value
                          ? { background: 'var(--primary)', borderColor: 'var(--primary)' }
                          : {}
                      }
                    >
                      {aspectoFisico === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span>{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pregunta 3: Visión afectada */}
          <div>
            <h3 className="mb-4">¿Tu visión está siendo afectada en los últimos años? (podés marcar varios)</h3>
            <div className="space-y-3">
              {visionAfectadaOptions.map((option) => {
                const isSelected = visionAfectada.includes(option.value);
                
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => toggleVisionAfectada(option.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                      isSelected
                        ? 'border-black bg-white shadow-md'
                        : 'border-black/10 bg-white hover:border-black/30'
                    }`}
                    style={
                      isSelected
                        ? { borderColor: 'var(--secondary)' }
                        : {}
                    }
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                          isSelected ? '' : 'border-black/20'
                        }`}
                        style={
                          isSelected
                            ? { background: 'var(--secondary)', borderColor: 'var(--secondary)' }
                            : {}
                        }
                      >
                        {isSelected && (
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 5.5L5 9.5L13 1.5"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span>{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              disabled={sintomasFisicos.length === 0 || !aspectoFisico || visionAfectada.length === 0}
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