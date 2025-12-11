// src/ghl/ghl.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { CreateTestResultDto } from '../tests/dto/create-test-result.dto';
import {
  HORAS_PANTALLAS_MAP,
  HORAS_DORMIR_MAP,
  CALIDAD_SUENO_MAP,
  PANTALLAS_ANTES_DORMIR_MAP,
  NIVEL_ENERGIA_MAP,
  CONCENTRACION_MAP,
  ESTADO_ANIMO_MAP,
  DESEO_SEXUAL_MAP,
  LIBIDO_CAMBIOS_MAP,
  CICLO_MENSTRUAL_MAP,
  SINTOMAS_MENSTRUALES_MAP,
  USA_GAFAS_MAP,
  ILUMINACION_NOCTURNA_MAP,
  EXPONE_AL_SOL_MAP,
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

  /**
   * Crea o actualiza un contacto en GoHighLevel a partir del resultado del test.
   * El score lo calculás en TestsService; acá por ahora NO lo guardamos en GHL.
   */
  async upsertContactFromTest(dto: CreateTestResultDto, score: number) {
    const url = `${this.baseUrl}/contacts/upsert`;

    const customFields: GhlCustomField[] = [];

    const pushField = (id: string, value: any) => {
      if (value === undefined || value === null) return;
      if (Array.isArray(value) && value.length === 0) return;
      if (value === '') return;
      customFields.push({ id, value });
    };

    // genero (TEXT)
    pushField('r4yHQrYI0EB0QTNsakmj', dto.genero);

    // horasPantallas (MULTIPLE_OPTIONS)
    pushField(
      'AZSqmqbWTBMCEvilrThN',
      HORAS_PANTALLAS_MAP[dto.horasPantallas] ?? dto.horasPantallas,
    );

    // dispositivosPrincipales (MULTIPLE_OPTIONS simple)
    pushField('BDuwOgjiXmvt477xhska', dto.dispositivosPrincipales);

    // horasDormir
    pushField(
      '3fbgzPyHei4KYf5sP4B7',
      HORAS_DORMIR_MAP[dto.horasDormir] ?? dto.horasDormir,
    );

    // calidadSueno
    pushField(
      'eElZrO0gheoAPAPEfPgk',
      CALIDAD_SUENO_MAP[dto.calidadSueno] ?? dto.calidadSueno,
    );

    // pantallasAntesDomir
    pushField(
      'CpsUMjjcGNLmxEhWJCfe',
      PANTALLAS_ANTES_DORMIR_MAP[dto.pantallasAntesDomir] ??
        dto.pantallasAntesDomir,
    );

    // nivelEnergia
    pushField(
      '5l4jYjt6XuBXwET4grvb',
      NIVEL_ENERGIA_MAP[dto.nivelEnergia] ?? dto.nivelEnergia,
    );

    // concentracion
    pushField(
      'us8jEM64xkukbVnzdOeL',
      CONCENTRACION_MAP[dto.concentracion] ?? dto.concentracion,
    );

    // estadoAnimo
    pushField(
      'CDtN0PfHE8tjH82Yaa2I',
      ESTADO_ANIMO_MAP[dto.estadoAnimo] ?? dto.estadoAnimo,
    );

    // deseoSexual
    pushField(
      'bRaZFLfNtr5PaKa6L8Ze',
      DESEO_SEXUAL_MAP[dto.deseoSexual] ?? dto.deseoSexual,
    );

    // libidoCambios
    pushField(
      'XkTFDxjiV4Ae3pY3bf14',
      LIBIDO_CAMBIOS_MAP[dto.libidoCambios] ?? dto.libidoCambios,
    );

    // sintomas (MULTIPLE_OPTIONS) → array de strings
    pushField('8rt4QVWT7DTkyXFHanif', dto.sintomas ?? []);

    // usaGafasBlueLight
    pushField(
      'rCLcBPjgaQVWa539KtT7',
      USA_GAFAS_MAP[dto.usaGafasBlueLight] ?? dto.usaGafasBlueLight,
    );

    // iluminacionNocturna
    pushField(
      'AeAHaRUP92R6ycRzAXPt',
      ILUMINACION_NOCTURNA_MAP[dto.iluminacionNocturna] ??
        dto.iluminacionNocturna,
    );

    // exponeAlSol
    pushField(
      'MSWxmc420ioCdHPB9Czl',
      EXPONE_AL_SOL_MAP[dto.exponeAlSol] ?? dto.exponeAlSol,
    );

    // cicloMenstrual (opcional)
    if (dto.cicloMenstrual) {
      pushField(
        'lMTkYQcRwZNykSpw4ScT',
        CICLO_MENSTRUAL_MAP[dto.cicloMenstrual] ?? dto.cicloMenstrual,
      );
    }

    // sintomasMenstruales (opcional)
    if (dto.sintomasMenstruales) {
      pushField(
        'QM6tfpUqyUl7R2mMkUvO',
        SINTOMAS_MENSTRUALES_MAP[dto.sintomasMenstruales] ??
          dto.sintomasMenstruales,
      );
    }

    // Si más adelante creás un custom field para el score:
    // pushField('ID_DEL_CAMPO_SCORE', score.toString());

    const body = {
      firstName: dto.nombre,
      email: dto.email,
      locationId: this.locationId,
      name: dto.nombre,
      tags: ['ADVA Optics', 'Test Lumínico'],
      customFields, // 👈 formato correcto para la API 2.0
    };

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
      Version: this.version,
    };

    try {
      const res = await firstValueFrom(
        this.http.post(url, body, { headers }),
      );
      this.logger.log(
        `GHL upsert contact OK: ${JSON.stringify(res.data)}`,
      );
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
