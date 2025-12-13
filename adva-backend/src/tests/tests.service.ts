// src/tests/tests.service.ts
import { Injectable } from '@nestjs/common';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { GhlService } from '../ghl/ghl.service';

@Injectable()
export class TestsService {
  constructor(private readonly ghlService: GhlService) {}

  private calculateScore(data: CreateTestResultDto): number {
    let score = 0;
    let maxScore = 0;

    // Step 2: Exposición a pantallas (0-25 puntos)
    maxScore += 25;

    // Q1: Horas frente a pantallas (0-10)
    if (data.horasPantallas === 'menos-3') score += 0;
    else if (data.horasPantallas === '3-6') score += 3;
    else if (data.horasPantallas === '6-9') score += 6;
    else if (data.horasPantallas === 'mas-9') score += 10;

    // Q2: Pantallas antes de dormir (0-10)
    if (data.pantallasAntesDomir === 'casi-no') score += 0;
    else if (data.pantallasAntesDomir === 'un-poco') score += 3;
    else if (data.pantallasAntesDomir === 'hasta-dormir') score += 7;
    else if (data.pantallasAntesDomir === 'me-duermo') score += 10;

    // Q3: Ambiente con luz artificial (0-5)
    if (data.ambienteLuzArtificial === 'casi-nunca') score += 0;
    else if (data.ambienteLuzArtificial === 'a-veces') score += 2;
    else if (data.ambienteLuzArtificial === 'casi-todos-dias') score += 3;
    else if (data.ambienteLuzArtificial === 'todo-dia') score += 5;

    // Step 3: Sueño (0-20 puntos)
    maxScore += 20;

    // Q1: Horas de sueño (0-8)
    if (data.horasDormir === '7-9') score += 0;
    else if (data.horasDormir === 'mas-9') score += 1;
    else if (data.horasDormir === '5-7') score += 4;
    else if (data.horasDormir === 'menos-5') score += 8;

    // Q2: Calidad de sueño (0-8)
    if (data.calidadSueno === 'profundo') score += 0;
    else if (data.calidadSueno === 'me-despierto') score += 2;
    else if (data.calidadSueno === 'me-cuesta') score += 5;
    else if (data.calidadSueno === 'cansado') score += 8;

    // Q3: Cansancio al levantarse (0-4)
    if (data.cansancioAlLevantar === 'casi-nunca') score += 0;
    else if (data.cansancioAlLevantar === '1-2-veces') score += 1;
    else if (data.cansancioAlLevantar === '3-5-veces') score += 2;
    else if (data.cansancioAlLevantar === 'casi-todos-dias') score += 4;

    // Step 4: Energía y concentración (0-15 puntos)
    maxScore += 15;

    // Q1: Nivel de energía (0-8)
    if (data.nivelEnergia === 'alta-estable') score += 0;
    else if (data.nivelEnergia === 'caida-tarde') score += 3;
    else if (data.nivelEnergia === 'cansado-todo-dia') score += 6;
    else if (data.nivelEnergia === 'necesito-estimulantes') score += 8;

    // Q2: Concentración (0-7)
    if (data.concentracion === 'casi-nunca') score += 0;
    else if (data.concentracion === 'a-veces') score += 2;
    else if (data.concentracion === 'muy-seguido') score += 4;
    else if (data.concentracion === 'casi-siempre') score += 7;

    // Step 5: Hormonas y vitalidad (0-20 puntos)
    maxScore += 20;

    // Q1: Deseo sexual (0-8)
    if (data.deseoSexual === 'igual-mejor') score += 0;
    else if (data.deseoSexual === 'poco-bajo') score += 3;
    else if (data.deseoSexual === 'notablemente-bajo') score += 6;
    else if (data.deseoSexual === 'casi-inexistente') score += 8;

    // Q2: Vitalidad física (0-8)
    if (data.vitalidadFisica === 'fuerte-recupero') score += 0;
    else if (data.vitalidadFisica === 'canso-rapido') score += 3;
    else if (data.vitalidadFisica === 'cuesta-recuperar') score += 6;
    else if (data.vitalidadFisica === 'sin-energia') score += 8;

    // Mujeres (cada una suma 1 punto al maxScore si está presente)
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

    // Q1: Síntomas físicos (0-6)
    const sintomasCount =
      data.sintomasFisicos?.filter((s) => s !== 'ninguno').length || 0;

    if (data.sintomasFisicos?.includes('ninguno')) {
      score += 0;
    } else {
      score += Math.min(sintomasCount * 1.5, 6);
    }

    // Q2: Aspecto físico (0-6)
    if (data.aspectoFisico === 'igual') score += 0;
    else if (data.aspectoFisico === 'poco-ojeras') score += 2;
    else if (data.aspectoFisico === 'bastante-peor') score += 4;
    else if (data.aspectoFisico === 'muy-deteriorado') score += 6;

    // Q3: Visión afectada (0-8)
    const visionCount =
      data.visionAfectada?.filter((v) => v !== 'igual').length || 0;

    if (data.visionAfectada?.includes('igual')) {
      score += 0;
    } else {
      score += Math.min(visionCount * 1.3, 8);
    }

    // Step 7: Hábitos de protección (0-15 puntos)
    maxScore += 15;

    // Q1: Protección pantallas (0-6)
    if (data.proteccionPantallas === 'gafas-casi-todos-dias') score += 0;
    else if (data.proteccionPantallas === 'gafas-vez-cuando') score += 2;
    else if (data.proteccionPantallas === 'modo-nocturno') score += 4;
    else if (data.proteccionPantallas === 'no-uso-nada') score += 6;

    // Q2: Horarios pantallas (0-6)
    if (data.horariosPantallas === 'rutina-cuidada') score += 0;
    else if (data.horariosPantallas === 'corto-1-hora') score += 2;
    else if (data.horariosPantallas === 'intento-cortar') score += 4;
    else if (data.horariosPantallas === 'hasta-dormir') score += 6;

    // Q3: Disposición a usar gafas (0-3)
    // (en tu lógica suma "riesgo", lo dejamos igual)
    if (data.disposicionGafas === 'muy-dispuesto') score += 0;
    else if (data.disposicionGafas === 'bastante-dispuesto') score += 1;
    else if (data.disposicionGafas === 'no-seguro') score += 2;
    else if (data.disposicionGafas === 'no-usaria') score += 3;

    // Estado de ánimo bonus (0-10)
    maxScore += 10;
    if (data.estadoAnimo === 'equilibrado') score += 0;
    else if (data.estadoAnimo === 'algo-irritable') score += 3;
    else if (data.estadoAnimo === 'bastante-irritable') score += 6;
    else if (data.estadoAnimo === 'muy-irritable') score += 10;

    // porcentaje final
    return Math.round((score / maxScore) * 100);
  }

  async createTestResult(dto: CreateTestResultDto) {
    let score = this.calculateScore(dto);

    // regla: si es menor a 70, forzamos 70-80
    if (score < 70) {
      score = Math.floor(Math.random() * (80 - 70 + 1)) + 70;
    }

    await this.ghlService.upsertContactFromTest(dto, score);
    return { score };
  }
}
