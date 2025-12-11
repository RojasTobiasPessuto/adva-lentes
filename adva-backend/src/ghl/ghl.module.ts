// src/ghl/ghl.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { GhlService } from './ghl.service';

@Module({
  imports: [HttpModule, ConfigModule], // ConfigModule porque usamos envs
  providers: [GhlService],
  exports: [GhlService], // 👈 IMPORTANTE: exportar el servicio
})
export class GhlModule {}
