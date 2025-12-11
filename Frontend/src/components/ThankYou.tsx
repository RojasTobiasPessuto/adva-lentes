import { AlertTriangle, Moon, Eye, Heart, Mail, ExternalLink } from 'lucide-react';

interface ThankYouProps {
  score: number;
  nombre: string;
  onViewEmail: () => void;
}

export function ThankYou({ score, nombre, onViewEmail }: ThankYouProps) {
  const getRiesgoLevel = () => {
    if (score >= 75) return { nivel: 'CRÍTICO', color: 'var(--secondary)' };
    if (score >= 50) return { nivel: 'ALTO', color: 'var(--primary)' };
    if (score >= 25) return { nivel: 'MODERADO', color: '#FF8C00' };
    return { nivel: 'BAJO', color: '#4CAF50' };
  };

  const riesgo = getRiesgoLevel();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <h3 className="tracking-widest" style={{ color: 'var(--primary)' }}>ADVA OPTICS</h3>
        </div>

        {/* Resultado principal */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <AlertTriangle size={64} style={{ color: riesgo.color }} />
          </div>
          <h1 className="mb-4">
            {nombre}, tu nivel de desbalance lumínico es de{' '}
            <span style={{ color: riesgo.color }}>{score}%</span>
          </h1>
          <div className="inline-block px-6 py-2 rounded-full mb-6" style={{ background: riesgo.color, color: 'white' }}>
            <span>Riesgo {riesgo.nivel}</span>
          </div>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#333' }}>
            Tu exposición actual a la luz artificial está afectando tu ritmo circadiano, tus hormonas y tu salud visual. 
            Es momento de tomar acción.
          </p>
        </div>

        {/* Barra de progreso */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="h-4 bg-white rounded-full overflow-hidden border border-black/10">
            <div
              className="h-full transition-all duration-1000"
              style={{
                width: `${score}%`,
                background: `linear-gradient(90deg, ${riesgo.color}, ${riesgo.color}dd)`,
              }}
            ></div>
          </div>
        </div>

        {/* Consecuencias */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-center mb-6">Impacto en tu salud:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-black/10 shadow-sm">
              <div className="flex items-start gap-4">
                <Moon size={24} style={{ color: 'var(--secondary)', flexShrink: 0 }} className="mt-1" />
                <div>
                  <h4 className="m-0 mb-2">Sueño alterado</h4>
                  <p className="text-sm m-0" style={{ color: '#666' }}>
                    Supresión de melatonina y dificultad para conciliar el sueño profundo
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/10 shadow-sm">
              <div className="flex items-start gap-4">
                <Eye size={24} style={{ color: 'var(--secondary)', flexShrink: 0 }} className="mt-1" />
                <div>
                  <h4 className="m-0 mb-2">Daño visual</h4>
                  <p className="text-sm m-0" style={{ color: '#666' }}>
                    Estrés oxidativo en la retina y fatiga ocular crónica
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/10 shadow-sm">
              <div className="flex items-start gap-4">
                <Heart size={24} style={{ color: 'var(--secondary)', flexShrink: 0 }} className="mt-1" />
                <div>
                  <h4 className="m-0 mb-2">Desbalance hormonal</h4>
                  <p className="text-sm m-0" style={{ color: '#666' }}>
                    Alteración en la producción de hormonas sexuales y del estrés
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/10 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle size={24} style={{ color: 'var(--secondary)', flexShrink: 0 }} className="mt-1" />
                <div>
                  <h4 className="m-0 mb-2">Energía y ánimo</h4>
                  <p className="text-sm m-0" style={{ color: '#666' }}>
                    Fatiga crónica, irritabilidad y dificultad de concentración
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="text-center">
            <a
              href="https://advaoptics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg text-lg"
              style={{ background: 'var(--primary)' }}
            >
              Ver gafas recomendadas en ADVA OPTICS
              <ExternalLink size={20} />
            </a>
          </div>

          <div className="text-center">
            <button
              onClick={onViewEmail}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border-2 border-black transition-all hover:shadow-md"
            >
              <Mail size={20} />
              Vista previa del email con recomendaciones
            </button>
          </div>

          <p className="text-center text-sm" style={{ color: '#666' }}>
            En los próximos minutos recibirás un email con hábitos científicos para mejorar tu higiene lumínica.
          </p>
        </div>

        {/* Footer científico */}
        <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-xl border border-black/10">
          <p className="text-sm text-center m-0" style={{ color: '#666' }}>
            <strong>Base científica:</strong> Este test está basado en investigaciones sobre ritmos circadianos, 
            fotobiología y los efectos de la luz artificial en la salud humana publicados en revistas 
            como Nature, Sleep Medicine y Journal of Clinical Endocrinology.
          </p>
        </div>
      </div>
    </div>
  );
}
