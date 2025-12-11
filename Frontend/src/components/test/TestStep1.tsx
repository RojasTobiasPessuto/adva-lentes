import { useState } from 'react';

interface TestStep1Props {
  onNext: (data: { nombre: string; email: string; genero: string }) => void;
}

export function TestStep1({ onNext }: TestStep1Props) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre && email && genero) {
      onNext({ nombre, email, genero });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-black/10 mb-6">
            <span className="text-sm">Paso 1 de 7</span>
          </div>
          <h2>Datos básicos</h2>
          <p style={{ color: '#666' }}>
            Necesitamos algunos datos para enviarte tu resultado personalizado.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-black/10 shadow-sm space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-black/20 focus:outline-none focus:border-black transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-black/20 focus:outline-none focus:border-black transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            {/* Género */}
            <div>
              <label htmlFor="genero" className="block mb-2">
                Género
              </label>
              <select
                id="genero"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-black/20 focus:outline-none focus:border-black transition-colors bg-white"
              >
                <option value="">Seleccionar</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-12 py-4 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: 'var(--primary)' }}
            >
              Comenzar test
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
