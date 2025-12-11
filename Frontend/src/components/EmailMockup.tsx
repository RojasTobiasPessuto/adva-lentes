import { X, Sun, Moon, Eye, Shield, Coffee } from 'lucide-react';

interface EmailMockupProps {
  score: number;
  nombre: string;
  onClose: () => void;
}

export function EmailMockup({ score, nombre, onClose }: EmailMockupProps) {
  const getRiesgoLevel = () => {
    if (score >= 75) return 'CRÍTICO';
    if (score >= 50) return 'ALTO';
    if (score >= 25) return 'MODERADO';
    return 'BAJO';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div
        className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del mockup */}
        <div className="sticky top-0 bg-gray-100 border-b border-gray-300 p-4 flex items-center justify-between">
          <div>
            <p className="text-sm m-0" style={{ color: '#666' }}>
              <strong>De:</strong> ADVA Optics &lt;salud@advaoptics.com&gt;
            </p>
            <p className="text-sm m-0" style={{ color: '#666' }}>
              <strong>Para:</strong> {nombre}
            </p>
            <p className="text-sm m-0" style={{ color: '#666' }}>
              <strong>Asunto:</strong> Tu resultado: Desbalance lumínico {score}% - Plan personalizado
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Contenido del email */}
        <div className="p-8" style={{ background: '#F2F2F2' }}>
          {/* Logo */}
          <div className="text-center mb-8">
            <h3 className="tracking-widest m-0" style={{ color: 'var(--primary)' }}>ADVA OPTICS</h3>
            <p className="text-sm m-0 mt-2" style={{ color: '#666' }}>Ciencia · Salud · Visión</p>
          </div>

          {/* Saludo personalizado */}
          <div className="bg-white p-6 rounded-xl mb-6 border border-black/10">
            <h2 className="m-0 mb-3">Hola {nombre},</h2>
            <p className="m-0">
              Gracias por completar nuestro test científico de alimentación lumínica. Tu resultado indica 
              un nivel de desbalance de <strong style={{ color: 'var(--primary)' }}>{score}%</strong> (Riesgo {getRiesgoLevel()}).
            </p>
          </div>

          {/* Explicación científica */}
          <div className="bg-white p-6 rounded-xl mb-6 border border-black/10">
            <h3 className="m-0 mb-3">¿Qué significa esto?</h3>
            <p className="m-0 mb-3">
              Tu exposición actual a la luz artificial, especialmente en horarios nocturnos, está generando 
              una alteración en tu ritmo circadiano. Esto impacta directamente en:
            </p>
            <ul className="space-y-2 m-0">
              <li>La producción de melatonina (hormona del sueño)</li>
              <li>El balance de cortisol (hormona del estrés)</li>
              <li>Tus hormonas sexuales (testosterona, estrógeno)</li>
              <li>La salud de tu retina y sistema visual</li>
            </ul>
          </div>

          {/* Hábitos recomendados */}
          <div className="bg-white p-6 rounded-xl mb-6 border border-black/10">
            <h3 className="m-0 mb-4" style={{ color: 'var(--primary)' }}>
              Tus 5 hábitos de higiene lumínica:
            </h3>

            <div className="space-y-4">
              {/* Hábito 1 */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="mt-1">
                  <Sun size={24} style={{ color: 'var(--secondary)' }} />
                </div>
                <div>
                  <h4 className="m-0 mb-1">1. Luz natural por la mañana</h4>
                  <p className="text-sm m-0" style={{ color: '#666' }}>
                    Exponete a la luz del sol dentro de la primera hora después de despertar. 
                    10-15 minutos son suficientes para sincronizar tu reloj biológico.
                  </p>
                </div>
              </div>

              {/* Hábito 2 */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="mt-1">
                  <Shield size={24} style={{ color: 'var(--secondary)' }} />
                </div>
                <div>
                  <h4 className="m-0 mb-1">2. Protección durante el día</h4>
                  <p className="text-sm m-0" style={{ color: '#666' }}>
                    Usá gafas con filtro de luz azul cuando trabajes en pantallas. Las de ADVA Optics 
                    bloquean el 99% de luz azul dañina sin distorsionar colores.
                  </p>
                </div>
              </div>

              {/* Hábito 3 */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="mt-1">
                  <Moon size={24} style={{ color: 'var(--secondary)' }} />
                </div>
                <div>
                  <h4 className="m-0 mb-1">3. Atenuación progresiva</h4>
                  <p className="text-sm m-0" style={{ color: '#666' }}>
                    2-3 horas antes de dormir, reducí la intensidad de las pantallas. Activá modo nocturno 
                    y disminuí el brillo al 50% o menos.
                  </p>
                </div>
              </div>

              {/* Hábito 4 */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="mt-1">
                  <Eye size={24} style={{ color: 'var(--secondary)' }} />
                </div>
                <div>
                  <h4 className="m-0 mb-1">4. Regla 20-20-20</h4>
                  <p className="text-sm m-0" style={{ color: '#666' }}>
                    Cada 20 minutos frente a pantallas, mirá algo a 20 pies (6 metros) de distancia 
                    durante 20 segundos. Esto reduce fatiga visual.
                  </p>
                </div>
              </div>

              {/* Hábito 5 */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="mt-1">
                  <Coffee size={24} style={{ color: 'var(--secondary)' }} />
                </div>
                <div>
                  <h4 className="m-0 mb-1">5. Iluminación inteligente</h4>
                  <p className="text-sm m-0" style={{ color: '#666' }}>
                    Usá luces cálidas (tonos ámbar/amarillos) por la noche. Evitá las luces LED blancas 
                    frías después de las 19:00 hs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección del producto */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl mb-6 border-2" style={{ borderColor: 'var(--primary)' }}>
            <h3 className="m-0 mb-3" style={{ color: 'var(--primary)' }}>
              ¿Por qué ADVA Optics?
            </h3>
            <p className="m-0 mb-4">
              Nuestras gafas están diseñadas con tecnología fotoselectiva avanzada:
            </p>
            <ul className="space-y-2 mb-4">
              <li>✓ Bloqueo del 99% de luz azul entre 380-500nm</li>
              <li>✓ Sin distorsión de color (a diferencia de lentes amarillos)</li>
              <li>✓ Protección UV400 completa</li>
              <li>✓ Diseño minimalista y profesional</li>
            </ul>
            <a
              href="https://advaoptics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full text-white transition-all hover:shadow-lg"
              style={{ background: 'var(--primary)' }}
            >
              Ver colección completa
            </a>
          </div>

          {/* Footer científico */}
          <div className="bg-white p-6 rounded-xl border border-black/10">
            <p className="text-sm text-center m-0 mb-3" style={{ color: '#666' }}>
              <strong>Referencias científicas:</strong>
            </p>
            <p className="text-xs m-0" style={{ color: '#999' }}>
              • Chang AM, et al. (2015). Evening use of light-emitting eReaders negatively affects sleep. PNAS.<br />
              • Tosini G, et al. (2016). Effects of blue light on the circadian system. Molecular Vision.<br />
              • Zhao J, et al. (2012). Is bilirubin an antioxidant in blue light-induced retinal damage? IOVS.
            </p>
          </div>

          {/* Firma */}
          <div className="text-center mt-8 pt-6 border-t border-black/10">
            <p className="m-0 mb-2">
              <strong>Equipo ADVA Optics</strong>
            </p>
            <p className="text-sm m-0" style={{ color: '#666' }}>
              Salud visual basada en ciencia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}