// src/ghl/ghl.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { CreateTestResultDto } from '../tests/dto/create-test-result.dto';
import {
  HORAS_PANTALLAS_MAP,
  PANTALLAS_ANTES_DORMIR_MAP,
  AMBIENTE_LUZ_ARTIFICIAL_MAP,
  HORAS_DORMIR_MAP,
  CALIDAD_SUENO_MAP,
  CANSANCIO_AL_LEVANTAR_MAP,
  NIVEL_ENERGIA_MAP,
  CONCENTRACION_MAP,
  ESTADO_ANIMO_MAP,
  DESEO_SEXUAL_MAP,
  VITALIDAD_FISICA_MAP,
  REGULARIDAD_CICLO_MAP,
  SINTOMAS_MENSTRUALES_MAP,
  ENERGIA_CICLO_MAP,
  FERTILIDAD_MAP,
  ASPECTO_FISICO_MAP,
  PROTECCION_PANTALLAS_MAP,
  HORARIOS_PANTALLAS_MAP,
  DISPOSICION_GAFAS_MAP,
  mapSintomasFisicosToGhl,
} from './ghl-mappers';

interface GhlCustomField {
  id: string;
  value: any;
}

@Injectable()
export class GhlService {
  private readonly logger = new Logger(GhlService.name);
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly version: string;
  private readonly locationId: string;

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.baseUrl =
      this.config.get<string>('GHL_API_BASE') ??
      'https://services.leadconnectorhq.com';
    this.apiKey = this.config.get<string>('GHL_API_KEY')!;
    this.version = this.config.get<string>('GHL_API_VERSION') ?? '2021-07-28';
    this.locationId = this.config.get<string>('GHL_LOCATION_ID')!;
  }

  async upsertContactFromTest(dto: CreateTestResultDto, score: number) {
    const url = `${this.baseUrl}/contacts/upsert`;
    const customFields: GhlCustomField[] = [];

    const pushField = (id: string, value: any) => {
      if (value === undefined || value === null) return;
      if (Array.isArray(value) && value.length === 0) return;
      if (value === '') return;
      customFields.push({ id, value });
    };

    /**
     * ⚠️ NOTA:
     * - No me pasaste el ID de "genero" (r4yHQrYI0EB0QTNsakmj) en esta lista nueva,
     *   pero si ya existe en tu cuenta y lo seguís usando, dejalo.
     * - Si no existe, comentá esta línea.
     */
    pushField('r4yHQrYI0EB0QTNsakmj', dto.genero);

    // Step 2
    pushField(
      'AZSqmqbWTBMCEvilrThN',
      HORAS_PANTALLAS_MAP[dto.horasPantallas] ?? dto.horasPantallas,
    );

    pushField(
      'jd8DwaI7ZukQxugJgGwQ',
      PANTALLAS_ANTES_DORMIR_MAP[dto.pantallasAntesDomir] ??
        dto.pantallasAntesDomir,
    );

    pushField(
      'iAr4phRrLznfXcnfQTBJ',
      AMBIENTE_LUZ_ARTIFICIAL_MAP[dto.ambienteLuzArtificial] ??
        dto.ambienteLuzArtificial,
    );

    // Step 3
    pushField(
      '3fbgzPyHei4KYf5sP4B7',
      HORAS_DORMIR_MAP[dto.horasDormir] ?? dto.horasDormir,
    );

    pushField(
      'eElZrO0gheoAPAPEfPgk',
      CALIDAD_SUENO_MAP[dto.calidadSueno] ?? dto.calidadSueno,
    );

    pushField(
      's8oE7665WJ4toekm1hBv',
      CANSANCIO_AL_LEVANTAR_MAP[dto.cansancioAlLevantar] ??
        dto.cansancioAlLevantar,
    );

    // Step 4
    pushField(
      '5l4jYjt6XuBXwET4grvb',
      NIVEL_ENERGIA_MAP[dto.nivelEnergia] ?? dto.nivelEnergia,
    );

    pushField(
      'us8jEM64xkukbVnzdOeL',
      CONCENTRACION_MAP[dto.concentracion] ?? dto.concentracion,
    );

    pushField(
      'CDtN0PfHE8tjH82Yaa2I',
      ESTADO_ANIMO_MAP[dto.estadoAnimo] ?? dto.estadoAnimo,
    );

    // Step 5
    pushField(
      'bRaZFLfNtr5PaKa6L8Ze',
      DESEO_SEXUAL_MAP[dto.deseoSexual] ?? dto.deseoSexual,
    );

    pushField(
      'pqOM7a8BxECcYI9FcF9I',
      VITALIDAD_FISICA_MAP[dto.vitalidadFisica] ?? dto.vitalidadFisica,
    );

    // Mujeres (opcionales)
    if (dto.regularidadCiclo) {
      pushField(
        'QiTEqBpYk5JbqVeMzBUz',
        REGULARIDAD_CICLO_MAP[dto.regularidadCiclo] ?? dto.regularidadCiclo,
      );
    }

    if (dto.sintomasMenstruales) {
      pushField(
        '8N7AbuVzjzx3RfMdEfJD',
        SINTOMAS_MENSTRUALES_MAP[dto.sintomasMenstruales] ??
          dto.sintomasMenstruales,
      );
    }

    if (dto.energiaCiclo) {
      pushField(
        'fGoAhwiNlcGdZEmEhr9S',
        ENERGIA_CICLO_MAP[dto.energiaCiclo] ?? dto.energiaCiclo,
      );
    }

    if (dto.fertilidad) {
      pushField(
        'PEO3TIH8qt92sITcdgtK',
        FERTILIDAD_MAP[dto.fertilidad] ?? dto.fertilidad,
      );
    }

    // sintomas físicos (MULTIPLE_OPTIONS)
    const sintomasRaw = dto.sintomasFisicos ?? dto.sintomas ?? [];
    pushField(
      '8rt4QVWT7DTkyXFHanif',
      mapSintomasFisicosToGhl(sintomasRaw),
    );

    pushField(
      'OtZruXxeNzJE0iO7FqJl',
      ASPECTO_FISICO_MAP[dto.aspectoFisico] ?? dto.aspectoFisico,
    );

    // visionAfectada (array)
    pushField('OjljHnvwtIXuuCxlkTYV', dto.visionAfectada ?? []);

    // Step 7
    pushField(
      '9VToXzXKdAZzwR3CU0g7',
      PROTECCION_PANTALLAS_MAP[dto.proteccionPantallas] ?? dto.proteccionPantallas,
    );

    pushField(
      'aPmc9AmKeFLLg1Oj5mej',
      HORARIOS_PANTALLAS_MAP[dto.horariosPantallas] ?? dto.horariosPantallas,
    );

    pushField(
      'teH7OQe3I2uPH4VQ5Plu',
      DISPOSICION_GAFAS_MAP[dto.disposicionGafas] ?? dto.disposicionGafas,
    );
    pushField('HeS58WHJL2fUvv1390SH', score);

    const body = {
      firstName: dto.nombre,
      email: dto.email,
      locationId: this.locationId,
      name: dto.nombre,
      tags: ['ADVA Optics', 'Test Lumínico'],
      customFields,
    };

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
      Version: this.version,
    };

    try {
      const res = await firstValueFrom(this.http.post(url, body, { headers }));
      this.logger.log(`GHL upsert contact OK: ${JSON.stringify(res.data)}`);
      return res.data;
    } catch (error: any) {
      this.logger.error(
        `Error upserting contact in GHL: ${
          error.response?.data
            ? JSON.stringify(error.response.data)
            : error.message
        }`,
      );
      throw error;
    }
  }
}
