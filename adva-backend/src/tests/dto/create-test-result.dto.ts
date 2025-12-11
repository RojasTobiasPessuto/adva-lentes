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
  dispositivosPrincipales: string;

  // Step 3
  @IsString()
  horasDormir: string;

  @IsString()
  calidadSueno: string;

  @IsString()
  pantallasAntesDomir: string;

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
  libidoCambios: string;

  @IsOptional()
  @IsString()
  cicloMenstrual?: string;

  @IsOptional()
  @IsString()
  sintomasMenstruales?: string;

  // Step 6
  @IsArray()
  @IsString({ each: true })
  sintomas: string[];

  // Step 7
  @IsString()
  usaGafasBlueLight: string;

  @IsString()
  iluminacionNocturna: string;

  @IsString()
  exponeAlSol: string;
}
