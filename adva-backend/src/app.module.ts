// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service'; // si lo tenés
import { TestsModule } from './tests/tests.module';
import { GhlModule } from './ghl/ghl.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    TestsModule,
    GhlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
