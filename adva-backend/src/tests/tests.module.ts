// src/tests/tests.module.ts
import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { GhlModule } from '../ghl/ghl.module';

@Module({
  imports: [GhlModule], // 👈 acá le decimos: "tenés acceso a GhlService"
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
