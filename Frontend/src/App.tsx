import { useState } from 'react';
import { Hero } from './components/Hero';
import { TestStep1 } from './components/test/TestStep1';
import { TestStep2 } from './components/test/TestStep2';
import { TestStep3 } from './components/test/TestStep3';
import { TestStep4 } from './components/test/TestStep4';
import { TestStep5 } from './components/test/TestStep5';
import { TestStep6 } from './components/test/TestStep6';
import { TestStep7 } from './components/test/TestStep7';
import { ThankYou } from './components/ThankYou';
import { EmailMockup } from './components/EmailMockup';

type Step =
  | 'hero'
  | 'step1'
  | 'step2'
  | 'step3'
  | 'step4'
  | 'step5'
  | 'step6'
  | 'step7'
  | 'thankyou';

interface TestData {
  // Step 1
  nombre: string;
  email: string;
  genero: string;
  // Step 2
  horasPantallas: string;
  dispositivosPrincipales: string;
  // Step 3
  horasDormir: string;
  calidadSueno: string;
  pantallasAntesDomir: string;
  // Step 4
  nivelEnergia: string;
  concentracion: string;
  estadoAnimo: string;
  // Step 5
  deseoSexual: string;
  libidoCambios: string;
  cicloMenstrual?: string;
  sintomasMenstruales?: string;
  // Step 6
  sintomas: string[];
  // Step 7
  usaGafasBlueLight: string;
  iluminacionNocturna: string;
  exponeAlSol: string;
}

// 👇 Base del backend (la podés setear en .env.local)
const API_BASE =
  import.meta.env.VITE_API_BASE ?? 'http://localhost:3001';

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>('hero');
  const [testData, setTestData] = useState<Partial<TestData>>({});
  const [showEmailMockup, setShowEmailMockup] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  // lo dejamos como fallback por si el back falla
  const calculateScore = (data: Partial<TestData>): number => {
    let score = 0;
    let maxScore = 0;

    // Step 2: Exposición a pantallas (0-15 puntos)
    maxScore += 15;
    if (data.horasPantallas === '0-2') score += 0;
    else if (data.horasPantallas === '2-4') score += 5;
    else if (data.horasPantallas === '4-8') score += 10;
    else if (data.horasPantallas === '8+') score += 15;

    // Step 3: Sueño (0-20 puntos)
    maxScore += 20;
    if (data.horasDormir === '8+') score += 0;
    else if (data.horasDormir === '7-8') score += 3;
    else if (data.horasDormir === '5-6') score += 8;
    else if (data.horasDormir === '<5') score += 12;

    if (data.calidadSueno === 'excelente') score += 0;
    else if (data.calidadSueno === 'buena') score += 2;
    else if (data.calidadSueno === 'regular') score += 5;
    else if (data.calidadSueno === 'mala') score += 8;

    if (data.pantallasAntesDomir === 'nunca') score += 0;
    else if (data.pantallasAntesDomir === 'a-veces') score += 3;
    else if (data.pantallasAntesDomir === 'siempre') score += 7;

    // Step 4: Energía y concentración (0-15 puntos)
    maxScore += 15;
    if (data.nivelEnergia === 'alta') score += 0;
    else if (data.nivelEnergia === 'variable') score += 3;
    else if (data.nivelEnergia === 'baja-manana') score += 5;
    else if (data.nivelEnergia === 'baja-constante') score += 8;

    if (data.concentracion === 'excelente') score += 0;
    else if (data.concentracion === 'buena') score += 2;
    else if (data.concentracion === 'dificil') score += 4;
    else if (data.concentracion === 'muy-dificil') score += 7;

    // Step 5: Hormonas (0-10 puntos)
    maxScore += 10;
    if (data.deseoSexual === 'alto') score += 0;
    else if (data.deseoSexual === 'normal') score += 2;
    else if (data.deseoSexual === 'bajo') score += 5;
    else if (data.deseoSexual === 'muy-bajo') score += 8;

    if (data.libidoCambios === 'sin-cambios') score += 0;
    else if (data.libidoCambios === 'disminucion') score += 2;
    else if (data.libidoCambios === 'disminucion-importante') score += 5;

    // Step 6: Síntomas (0-15 puntos)
    maxScore += 15;
    const sintomasCount = data.sintomas?.filter(s => s !== 'ninguno').length || 0;
    if (data.sintomas?.includes('ninguno')) {
      score += 0;
    } else {
      score += Math.min(sintomasCount * 2, 15);
    }

    // Step 7: Hábitos de protección (0-15 puntos)
    maxScore += 15;
    if (data.usaGafasBlueLight === 'si') score += 0;
    else if (data.usaGafasBlueLight === 'a-veces') score += 3;
    else if (data.usaGafasBlueLight === 'no') score += 6;

    if (data.iluminacionNocturna === 'calida') score += 0;
    else if (data.iluminacionNocturna === 'mixta') score += 3;
    else if (data.iluminacionNocturna === 'fria') score += 5;
    else if (data.iluminacionNocturna === 'no-se') score += 4;

    if (data.exponeAlSol === 'mucho') score += 0;
    else if (data.exponeAlSol === 'poco') score += 3;
    else if (data.exponeAlSol === 'casi-nada') score += 6;

    // Estado de ánimo bonus (0-10 puntos)
    maxScore += 10;
    if (data.estadoAnimo === 'positivo') score += 0;
    else if (data.estadoAnimo === 'neutral') score += 3;
    else if (data.estadoAnimo === 'variable') score += 6;
    else if (data.estadoAnimo === 'bajo') score += 10;

    // Convertir a porcentaje
    return Math.round((score / maxScore) * 100);
  };

  const handleStartTest = () => {
    setCurrentStep('step1');
  };

  const handleStep1Complete = (data: {
    nombre: string;
    email: string;
    genero: string;
  }) => {
    setTestData((prev: Partial<TestData>) => ({ ...prev, ...data }));
    setCurrentStep('step2');
  };

  const handleStep2Complete = (data: {
    horasPantallas: string;
    dispositivosPrincipales: string;
  }) => {
    setTestData((prev: Partial<TestData>) => ({ ...prev, ...data }));
    setCurrentStep('step3');
  };

  const handleStep3Complete = (data: {
    horasDormir: string;
    calidadSueno: string;
    pantallasAntesDomir: string;
  }) => {
    setTestData((prev: Partial<TestData>) => ({ ...prev, ...data }));
    setCurrentStep('step4');
  };

  const handleStep4Complete = (data: {
    nivelEnergia: string;
    concentracion: string;
    estadoAnimo: string;
  }) => {
    setTestData((prev: Partial<TestData>) => ({ ...prev, ...data }));
    setCurrentStep('step5');
  };

  const handleStep5Complete = (data: {
    deseoSexual: string;
    libidoCambios: string;
    cicloMenstrual?: string;
    sintomasMenstruales?: string;
  }) => {
    setTestData((prev: Partial<TestData>) => ({ ...prev, ...data }));
    setCurrentStep('step6');
  };

  const handleStep6Complete = (data: { sintomas: string[] }) => {
    setTestData((prev: Partial<TestData>) => ({ ...prev, ...data }));
    setCurrentStep('step7');
  };

  // 👇 AHORA AQUÍ LLAMAMOS AL BACK
  const handleStep7Complete = async (data: {
    usaGafasBlueLight: string;
    iluminacionNocturna: string;
    exponeAlSol: string;
  }) => {
    const finalData = { ...testData, ...data } as TestData;
    setTestData(finalData);

    try {
      const res = await fetch(`${API_BASE}/tests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json = await res.json(); // { score }
      setFinalScore(json.score ?? 0);
    } catch (err) {
      console.error('Error llamando al backend, uso cálculo local:', err);
      const localScore = calculateScore(finalData);
      setFinalScore(localScore);
    }

    setCurrentStep('thankyou');
  };

  return (
    <div className="min-h-screen">
      {currentStep === 'hero' && <Hero onStartTest={handleStartTest} />}
      {currentStep === 'step1' && <TestStep1 onNext={handleStep1Complete} />}
      {currentStep === 'step2' && <TestStep2 onNext={handleStep2Complete} />}
      {currentStep === 'step3' && <TestStep3 onNext={handleStep3Complete} />}
      {currentStep === 'step4' && <TestStep4 onNext={handleStep4Complete} />}
      {currentStep === 'step5' && (
        <TestStep5 onNext={handleStep5Complete} genero={testData.genero || ''} />
      )}
      {currentStep === 'step6' && <TestStep6 onNext={handleStep6Complete} />}
      {currentStep === 'step7' && <TestStep7 onComplete={handleStep7Complete} />}
      {currentStep === 'thankyou' && (
        <ThankYou
          score={finalScore}
          nombre={testData.nombre || ''}
          onViewEmail={() => setShowEmailMockup(true)}
        />
      )}

      {showEmailMockup && (
        <EmailMockup
          score={finalScore}
          nombre={testData.nombre || ''}
          onClose={() => setShowEmailMockup(false)}
        />
      )}
    </div>
  );
}
