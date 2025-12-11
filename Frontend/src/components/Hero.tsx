import { Sun, Moon, Brain, Heart } from 'lucide-react';

interface HeroProps {
  onStartTest: () => void;
}

export function Hero({ onStartTest }: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Logo placeholder */}
        <div className="text-center mb-12">
          <h3 className="tracking-widest" style={{ color: 'var(--primary)' }}>ADVA OPTICS</h3>
        </div>

        {/* Main headline */}
        <div className="text-center mb-8">
          <h1 className="mb-6">
            ¿Qué tan nociva es tu <span style={{ color: 'var(--primary)' }}>alimentación lumínica</span>?
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#333' }}>
            La luz de tus pantallas altera tus hormonas, tu deseo sexual, tu energía y tu salud a largo plazo. 
            Hacé este test científico de 2 minutos y descubrí tu nivel de riesgo.
          </p>
        </div>

        {/* Visual elements */}
        <div className="flex justify-center gap-8 mb-12 opacity-20">
          <Sun size={48} style={{ color: 'var(--secondary)' }} />
          <Moon size={48} style={{ color: 'var(--primary)' }} />
          <Brain size={48} style={{ color: 'var(--secondary)' }} />
        </div>

        {/* Bullets */}
        <div className="max-w-2xl mx-auto mb-12 space-y-4">
          <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-black/10 shadow-sm">
            <div className="mt-1">
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }}></div>
            </div>
            <p className="flex-1 m-0">
              Basado en estudios sobre ritmos circadianos, hormonas y luz artificial.
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-black/10 shadow-sm">
            <div className="mt-1">
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }}></div>
            </div>
            <p className="flex-1 m-0">
              Cómo tu exposición a pantallas afecta sueño, energía y rendimiento.
            </p>
          </div>

          <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-black/10 shadow-sm">
            <div className="mt-1">
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }}></div>
            </div>
            <p className="flex-1 m-0">
              Recibí tu resultado + recomendaciones personalizadas por email.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onStartTest}
            className="px-12 py-5 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: 'var(--primary)' }}
          >
            Hacer el test ahora
          </button>
        </div>

        {/* Footer note */}
        <p className="text-center mt-8 text-sm opacity-60">
          Test científico · 2 minutos · Resultado personalizado
        </p>
      </div>
    </div>
  );
}
