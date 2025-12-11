import { Injectable } from '@nestjs/common';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { GhlService } from '../ghl/ghl.service';

@Injectable()
export class TestsService {
  constructor(private readonly ghlService: GhlService) {}

  private calculateScore(data: CreateTestResultDto): number {
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

    return Math.round((score / maxScore) * 100);
  }

  async createTestResult(dto: CreateTestResultDto) {
    const score = this.calculateScore(dto);

    await this.ghlService.upsertContactFromTest(dto, score);

    return { score };
  }
}
