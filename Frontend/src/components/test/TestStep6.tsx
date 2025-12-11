import { useState } from 'react';
import { Eye, AlertCircle, Sun } from 'lucide-react';

interface TestStep6Props {
  onNext: (data: { sintomas: string[] }) => void;
}

export function TestStep6({ onNext }: TestStep6Props) {
  const [sintomas, setSintomas] = useState<string[]>([]);

  const toggleSintoma = (sintoma: string) => {
    if (sintomas.includes(sintoma)) {
      setSintomas(sintomas.filter(s => s !== sintoma));
    } else {
      setSintomas([...sintomas, sintoma]);
    }
  };

  const handleSubmit = () => {
    onNext({ sintomas });
  };

  const sintomasOptions = [
    { value: 'ojos-secos', label: 'Ojos secos o irritados' },
    { value: 'fatiga-visual', label: 'Fatiga visual o vista cansada' },
    { value: 'dolores-cabeza', label: 'Dolores de cabeza frecuentes' },
    { value: 'vision-borrosa', label: 'Visión borrosa al final del día' },
    { value: 'sensibilidad-luz', label: 'Sensibilidad a la luz' },
    { value: 'enrojecimiento', label: 'Enrojecimiento ocular' },
    { value: 'tension-cuello', label: 'Tensión en cuello y hombros' },
    { value: 'ninguno', label: 'Ninguno de los anteriores' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-black/10 mb-6">
            <span className="text-sm">Paso 6 de 7</span>
          </div>
          <h2>Tus ojos, tu cuerpo y la luz</h2>
          <p style={{ color: '#666' }}>
            La exposición prolongada a la luz azul genera estrés oxidativo en la retina y puede acelerar el daño fotoquímico a largo plazo.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Eye size={36} />
          <AlertCircle size={36} />
          <Sun size={36} />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-4">¿Experimentás alguno de estos síntomas? (podés seleccionar varios)</h3>
            <div className="space-y-3">
              {sintomasOptions.map((option) => {
                const isSelected = sintomas.includes(option.value);
                const isNinguno = option.value === 'ninguno';
                
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      if (isNinguno) {
                        setSintomas([option.value]);
                      } else {
                        toggleSintoma(option.value);
                        if (sintomas.includes('ninguno')) {
                          setSintomas([option.value]);
                        }
                      }
                    }}
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

          <div className="bg-white border border-black/10 rounded-xl p-5">
            <p className="text-sm m-0" style={{ color: '#666' }}>
              <strong>Dato científico:</strong> La exposición crónica a luz azul artificial está asociada con mayor riesgo de degeneración macular y alteración del epitelio pigmentario de la retina.
            </p>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              className="px-12 py-4 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg"
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
