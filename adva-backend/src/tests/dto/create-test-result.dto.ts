// src/tests/dto/create-test-result.dto.ts
import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateTestResultDto {
  // Step 1
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  genero: string;

  // Step 2
  @IsString()
  horasPantallas: string;

  @IsString()
  pantallasAntesDomir: string;

  @IsString()
  ambienteLuzArtificial: string;

  // Step 3
  @IsString()
  horasDormir: string;

  @IsString()
  calidadSueno: string;

  @IsString()
  cansancioAlLevantar: string;

  // Step 4
  @IsString()
  nivelEnergia: string;

  @IsString()
  concentracion: string;

  @IsString()
  estadoAnimo: string;

  // Step 5
  @IsString()
  deseoSexual: string;

  @IsString()
  vitalidadFisica: string;

  @IsOptional()
  @IsString()
  regularidadCiclo?: string;

  @IsOptional()
  @IsString()
  sintomasMenstruales?: string;

  @IsOptional()
  @IsString()
  energiaCiclo?: string;

  @IsOptional()
  @IsString()
  fertilidad?: string;

  // Step 6 (✅ compat: nuevo y viejo)
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  sintomasFisicos?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  sintomas?: string[];

  @IsString()
  aspectoFisico: string;

  @IsArray()
  @IsString({ each: true })
  visionAfectada: string[];

  // Step 7
  @IsString()
  proteccionPantallas: string;

  @IsString()
  horariosPantallas: string;

  @IsString()
  disposicionGafas: string;
}
