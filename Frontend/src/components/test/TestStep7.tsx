import { useState } from 'react';
import { Shield, Lightbulb, Moon } from 'lucide-react';

interface TestStep7Props {
  onComplete: (data: { 
    usaGafasBlueLight: string; 
    iluminacionNocturna: string; 
    exponeAlSol: string;
  }) => void;
}

export function TestStep7({ onComplete }: TestStep7Props) {
  const [usaGafasBlueLight, setUsaGafasBlueLight] = useState('');
  const [iluminacionNocturna, setIluminacionNocturna] = useState('');
  const [exponeAlSol, setExponeAlSol] = useState('');

  const handleSubmit = () => {
    if (usaGafasBlueLight && iluminacionNocturna && exponeAlSol) {
      onComplete({ usaGafasBlueLight, iluminacionNocturna, exponeAlSol });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-black/10 mb-6">
            <span className="text-sm">Paso 7 de 7 - Último paso</span>
          </div>
          <h2>Hábitos de salud lumínica</h2>
          <p style={{ color: '#666' }}>
            Tus hábitos de protección y exposición a la luz natural son fundamentales para mantener un ritmo circadiano saludable.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Shield size={36} />
          <Lightbulb size={36} />
          <Moon size={36} />
        </div>

        <div className="space-y-8">
          {/* Uso de gafas */}
          <div>
            <h3 className="mb-4">¿Usás gafas con filtro de luz azul?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'si', label: 'Sí, regularmente' },
                { value: 'a-veces', label: 'A veces' },
                { value: 'no', label: 'No' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setUsaGafasBlueLight(option.value)}
                  className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                    usaGafasBlueLight === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    usaGafasBlueLight === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Iluminación nocturna */}
          <div>
            <h3 className="mb-4">¿Qué tipo de iluminación usás por la noche en tu casa?</h3>
            <div className="space-y-3">
              {[
                { value: 'calida', label: 'Luz cálida, tenue (ámbar, amarilla)' },
                { value: 'mixta', label: 'Mezcla de luces cálidas y frías' },
                { value: 'fria', label: 'Luz blanca fría o muy brillante' },
                { value: 'no-se', label: 'No sé / No le presto atención' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setIluminacionNocturna(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    iluminacionNocturna === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    iluminacionNocturna === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Exposición al sol */}
          <div>
            <h3 className="mb-4">¿Te exponés a la luz natural del sol durante el día?</h3>
            <div className="space-y-3">
              {[
                { value: 'mucho', label: 'Sí, más de 30 minutos al día' },
                { value: 'poco', label: 'Poco, menos de 30 minutos' },
                { value: 'casi-nada', label: 'Casi nada, paso el día en interiores' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setExponeAlSol(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    exponeAlSol === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    exponeAlSol === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-black/10 rounded-xl p-5">
            <p className="text-sm m-0" style={{ color: '#666' }}>
              <strong>Sabías que...</strong> La exposición a luz natural por la mañana ayuda a sincronizar tu reloj biológico y mejora la producción de melatonina por la noche.
            </p>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              disabled={!usaGafasBlueLight || !iluminacionNocturna || !exponeAlSol}
              className="px-12 py-5 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg"
              style={{ background: 'var(--primary)' }}
            >
              Ver mi resultado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
