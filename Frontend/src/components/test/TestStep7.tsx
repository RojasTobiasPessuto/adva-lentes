import { useState } from 'react';
import { Shield, Lightbulb, Moon } from 'lucide-react';

interface TestStep7Props {
  onComplete: (data: { 
    proteccionPantallas: string; 
    horariosPantallas: string; 
    disposicionGafas: string;
  }) => void;
}

export function TestStep7({ onComplete }: TestStep7Props) {
  const [proteccionPantallas, setProteccionPantallas] = useState('');
  const [horariosPantallas, setHorariosPantallas] = useState('');
  const [disposicionGafas, setDisposicionGafas] = useState('');

  const handleSubmit = () => {
    if (proteccionPantallas && horariosPantallas && disposicionGafas) {
      onComplete({ proteccionPantallas, horariosPantallas, disposicionGafas });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-black/10 mb-6">
            <span className="text-sm">Paso 7 de 7 - Último paso</span>
          </div>
          <h2>¿Qué tan protegido estás hoy?</h2>
          <p style={{ color: '#666', lineHeight: '1.6', marginTop: '16px' }}>
            Así como existe la mala alimentación, también existe la 'mala alimentación lumínica'. La mayoría de las personas no tienen ninguna estrategia para protegerse de la luz tóxica, pero sí pasan 8–12 horas al día frente a pantallas o bajo luces artificiales.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8 opacity-30">
          <Shield size={36} />
          <Lightbulb size={36} />
          <Moon size={36} />
        </div>

        <div className="space-y-8">
          {/* Pregunta 1: Protección para pantallas */}
          <div>
            <h3 className="mb-4">Actualmente, ¿usás algún tipo de protección para la luz de pantallas?</h3>
            <div className="space-y-3">
              {[
                { value: 'no-uso-nada', label: 'No uso nada' },
                { value: 'modo-nocturno', label: "A veces activo el 'modo nocturno' del celular / compu" },
                { value: 'gafas-vez-cuando', label: 'Uso gafas con filtro de luz azul solo de vez en cuando' },
                { value: 'gafas-casi-todos-dias', label: 'Uso gafas con filtro específico, casi todos los días y en horarios clave' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setProteccionPantallas(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    proteccionPantallas === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    proteccionPantallas === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        proteccionPantallas === option.value ? '' : 'border-black/20'
                      }`}
                      style={
                        proteccionPantallas === option.value
                          ? { background: 'var(--primary)', borderColor: 'var(--primary)' }
                          : {}
                      }
                    >
                      {proteccionPantallas === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span>{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pregunta 2: Horarios para cortar pantallas */}
          <div>
            <h3 className="mb-4">¿Tenés horarios definidos para cortar pantallas antes de dormir?</h3>
            <div className="space-y-3">
              {[
                { value: 'hasta-dormir', label: 'No, uso pantallas hasta el momento de dormir' },
                { value: 'intento-cortar', label: 'A veces intento cortar, pero no siempre lo logro' },
                { value: 'corto-1-hora', label: 'Casi siempre corto mínimo 1 hora antes de dormir' },
                { value: 'rutina-cuidada', label: 'Tengo una rutina muy cuidada de noche (luces cálidas, sin pantallas, etc.)' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setHorariosPantallas(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    horariosPantallas === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    horariosPantallas === option.value
                      ? { borderColor: 'var(--primary)' }
                      : {}
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        horariosPantallas === option.value ? '' : 'border-black/20'
                      }`}
                      style={
                        horariosPantallas === option.value
                          ? { background: 'var(--primary)', borderColor: 'var(--primary)' }
                          : {}
                      }
                    >
                      {horariosPantallas === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span>{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pregunta 3: Disposición a usar gafas especializadas (intención de compra) */}
          <div>
            <h3 className="mb-4">Si tuvieras un par de gafas especialmente diseñadas para bloquear la luz tóxica en los momentos críticos del día, ¿qué tan dispuesto estarías a usarlas?</h3>
            <div className="space-y-3">
              {[
                { value: 'muy-dispuesto', label: 'Muy dispuesto, las usaría todos los días' },
                { value: 'bastante-dispuesto', label: 'Bastante dispuesto, especialmente de noche' },
                { value: 'no-seguro', label: 'No estoy seguro, pero me gustaría probar' },
                { value: 'no-usaria', label: 'No creo que las usaría' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setDisposicionGafas(option.value)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    disposicionGafas === option.value
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  }`}
                  style={
                    disposicionGafas === option.value
                      ? { borderColor: 'var(--secondary)' }
                      : {}
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        disposicionGafas === option.value ? '' : 'border-black/20'
                      }`}
                      style={
                        disposicionGafas === option.value
                          ? { background: 'var(--secondary)', borderColor: 'var(--secondary)' }
                          : {}
                      }
                    >
                      {disposicionGafas === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span>{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              disabled={!proteccionPantallas || !horariosPantallas || !disposicionGafas}
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