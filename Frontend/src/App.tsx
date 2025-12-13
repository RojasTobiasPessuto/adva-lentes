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
  pantallasAntesDomir: string;
  ambienteLuzArtificial: string;

  // Step 3
  horasDormir: string;
  calidadSueno: string;
  cansancioAlLevantar: string;

  // Step 4
  nivelEnergia: string;
  concentracion: string;
  estadoAnimo: string;

  // Step 5
  deseoSexual: string;
  vitalidadFisica: string;
  regularidadCiclo?: string;
  sintomasMenstruales?: string;
  energiaCiclo?: string;
  fertilidad?: string;

  // Step 6
  sintomasFisicos: string[];
  aspectoFisico: string;
  visionAfectada: string[];

  // Step 7
  proteccionPantallas: string;
  horariosPantallas: string;
  disposicionGafas: string;
}

// 👇 Base del backend (la podés setear en .env.local)
const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3001';

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>('hero');
  const [testData, setTestData] = useState<Partial<TestData>>({});
  const [showEmailMockup, setShowEmailMockup] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  // fallback local (por si el back falla)
  const calculateScore = (data: Partial<TestData>): number => {
    let score = 0;
    let maxScore = 0;

    // Step 2: Exposición a pantallas (0-25 puntos)
    maxScore += 25;
    if (data.horasPantallas === 'menos-3') score += 0;
    else if (data.horasPantallas === '3-6') score += 3;
    else if (data.horasPantallas === '6-9') score += 6;
    else if (data.horasPantallas === 'mas-9') score += 10;

    if (data.pantallasAntesDomir === 'casi-no') score += 0;
    else if (data.pantallasAntesDomir === 'un-poco') score += 3;
    else if (data.pantallasAntesDomir === 'hasta-dormir') score += 7;
    else if (data.pantallasAntesDomir === 'me-duermo') score += 10;

    if (data.ambienteLuzArtificial === 'casi-nunca') score += 0;
    else if (data.ambienteLuzArtificial === 'a-veces') score += 2;
    else if (data.ambienteLuzArtificial === 'casi-todos-dias') score += 3;
    else if (data.ambienteLuzArtificial === 'todo-dia') score += 5;

    // Step 3: Sueño (0-20 puntos)
    maxScore += 20;
    if (data.horasDormir === '7-9') score += 0;
    else if (data.horasDormir === 'mas-9') score += 1;
    else if (data.horasDormir === '5-7') score += 4;
    else if (data.horasDormir === 'menos-5') score += 8;

    if (data.calidadSueno === 'profundo') score += 0;
    else if (data.calidadSueno === 'me-despierto') score += 2;
    else if (data.calidadSueno === 'me-cuesta') score += 5;
    else if (data.calidadSueno === 'cansado') score += 8;

    if (data.cansancioAlLevantar === 'casi-nunca') score += 0;
    else if (data.cansancioAlLevantar === '1-2-veces') score += 1;
    else if (data.cansancioAlLevantar === '3-5-veces') score += 2;
    else if (data.cansancioAlLevantar === 'casi-todos-dias') score += 4;

    // Step 4: Energía y concentración (0-15 puntos)
    maxScore += 15;
    if (data.nivelEnergia === 'alta-estable') score += 0;
    else if (data.nivelEnergia === 'caida-tarde') score += 3;
    else if (data.nivelEnergia === 'cansado-todo-dia') score += 6;
    else if (data.nivelEnergia === 'necesito-estimulantes') score += 8;

    if (data.concentracion === 'casi-nunca') score += 0;
    else if (data.concentracion === 'a-veces') score += 2;
    else if (data.concentracion === 'muy-seguido') score += 4;
    else if (data.concentracion === 'casi-siempre') score += 7;

    // Step 5: Hormonas y vitalidad (0-20 puntos)
    maxScore += 20;
    if (data.deseoSexual === 'igual-mejor') score += 0;
    else if (data.deseoSexual === 'poco-bajo') score += 3;
    else if (data.deseoSexual === 'notablemente-bajo') score += 6;
    else if (data.deseoSexual === 'casi-inexistente') score += 8;

    if (data.vitalidadFisica === 'fuerte-recupero') score += 0;
    else if (data.vitalidadFisica === 'canso-rapido') score += 3;
    else if (data.vitalidadFisica === 'cuesta-recuperar') score += 6;
    else if (data.vitalidadFisica === 'sin-energia') score += 8;

    if (data.regularidadCiclo) {
      maxScore += 1;
      if (data.regularidadCiclo === 'regular') score += 0;
      else if (data.regularidadCiclo === 'adelanta-atrasa') score += 0.3;
      else if (data.regularidadCiclo === 'irregular') score += 0.6;
      else if (data.regularidadCiclo === 'no-anticipar') score += 1;
    }

    if (data.sintomasMenstruales) {
      maxScore += 1;
      if (data.sintomasMenstruales === 'igual') score += 0;
      else if (data.sintomasMenstruales === 'poco-intensos') score += 0.3;
      else if (data.sintomasMenstruales === 'muy-intensos') score += 0.7;
      else if (data.sintomasMenstruales === 'cambiaron-notable') score += 1;
    }

    if (data.energiaCiclo) {
      maxScore += 1;
      if (data.energiaCiclo === 'estable') score += 0;
      else if (data.energiaCiclo === 'altibajos') score += 0.3;
      else if (data.energiaCiclo === 'fatiga') score += 0.7;
      else if (data.energiaCiclo === 'agotada') score += 1;
    }

    if (data.fertilidad && data.fertilidad !== 'no-aplica') {
      maxScore += 1;
      if (data.fertilidad === 'no-cambios') score += 0;
      else if (data.fertilidad === 'dificil-identificar') score += 0.4;
      else if (data.fertilidad === 'irregulares') score += 0.7;
      else if (data.fertilidad === 'dificultades') score += 1;
    }

    // Step 6: Síntomas físicos y visuales (0-20 puntos)
    maxScore += 20;

    const sintomasFisicosCount =
      data.sintomasFisicos?.filter((s) => s !== 'ninguno').length || 0;
    if (data.sintomasFisicos?.includes('ninguno')) score += 0;
    else score += Math.min(sintomasFisicosCount * 1.5, 6);

    if (data.aspectoFisico === 'igual') score += 0;
    else if (data.aspectoFisico === 'poco-ojeras') score += 2;
    else if (data.aspectoFisico === 'bastante-peor') score += 4;
    else if (data.aspectoFisico === 'muy-deteriorado') score += 6;

    const visionAfectadaCount =
      data.visionAfectada?.filter((v) => v !== 'igual').length || 0;
    if (data.visionAfectada?.includes('igual')) score += 0;
    else score += Math.min(visionAfectadaCount * 1.3, 8);

    // Step 7: Hábitos de protección (0-15 puntos)
    maxScore += 15;
    if (data.proteccionPantallas === 'gafas-casi-todos-dias') score += 0;
    else if (data.proteccionPantallas === 'gafas-vez-cuando') score += 2;
    else if (data.proteccionPantallas === 'modo-nocturno') score += 4;
    else if (data.proteccionPantallas === 'no-uso-nada') score += 6;

    if (data.horariosPantallas === 'rutina-cuidada') score += 0;
    else if (data.horariosPantallas === 'corto-1-hora') score += 2;
    else if (data.horariosPantallas === 'intento-cortar') score += 4;
    else if (data.horariosPantallas === 'hasta-dormir') score += 6;

    if (data.disposicionGafas === 'muy-dispuesto') score += 0;
    else if (data.disposicionGafas === 'bastante-dispuesto') score += 1;
    else if (data.disposicionGafas === 'no-seguro') score += 2;
    else if (data.disposicionGafas === 'no-usaria') score += 3;

    // Estado de ánimo bonus (0-10 puntos)
    maxScore += 10;
    if (data.estadoAnimo === 'equilibrado') score += 0;
    else if (data.estadoAnimo === 'algo-irritable') score += 3;
    else if (data.estadoAnimo === 'bastante-irritable') score += 6;
    else if (data.estadoAnimo === 'muy-irritable') score += 10;

    return Math.round((score / maxScore) * 100);
  };

  const handleStartTest = () => setCurrentStep('step1');

  const handleStep1Complete = (data: { nombre: string; email: string; genero: string }) => {
    setTestData((prev) => ({ ...prev, ...data }));
    setCurrentStep('step2');
  };

  const handleStep2Complete = (data: {
    horasPantallas: string;
    pantallasAntesDomir: string;
    ambienteLuzArtificial: string;
  }) => {
    setTestData((prev) => ({ ...prev, ...data }));
    setCurrentStep('step3');
  };

  const handleStep3Complete = (data: {
    horasDormir: string;
    calidadSueno: string;
    cansancioAlLevantar: string;
  }) => {
    setTestData((prev) => ({ ...prev, ...data }));
    setCurrentStep('step4');
  };

  const handleStep4Complete = (data: { nivelEnergia: string; concentracion: string; estadoAnimo: string }) => {
    setTestData((prev) => ({ ...prev, ...data }));
    setCurrentStep('step5');
  };

  const handleStep5Complete = (data: {
    deseoSexual: string;
    vitalidadFisica: string;
    regularidadCiclo?: string;
    sintomasMenstruales?: string;
    energiaCiclo?: string;
    fertilidad?: string;
  }) => {
    setTestData((prev) => ({ ...prev, ...data }));
    setCurrentStep('step6');
  };

  const handleStep6Complete = (data: { sintomasFisicos: string[]; aspectoFisico: string; visionAfectada: string[] }) => {
    setTestData((prev) => ({ ...prev, ...data }));
    setCurrentStep('step7');
  };

  // ✅ volvemos a llamar al backend (como antes)
  const handleStep7Complete = async (data: {
    proteccionPantallas: string;
    horariosPantallas: string;
    disposicionGafas: string;
  }) => {
    const finalData = { ...testData, ...data } as TestData;
    setTestData(finalData);

    try {
      const res = await fetch(`${API_BASE}/tests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json(); // { score }
      setFinalScore(json.score ?? 0);
    } catch (err) {
      console.error('Error llamando al backend, uso cálculo local:', err);
      setFinalScore(calculateScore(finalData));
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
      {currentStep === 'step5' && <TestStep5 onNext={handleStep5Complete} genero={testData.genero || ''} />}
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
