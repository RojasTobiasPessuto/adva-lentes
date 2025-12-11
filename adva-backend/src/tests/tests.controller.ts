// src/tests/tests.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { TestsService } from './tests.service';
import { CreateTestResultDto } from './dto/create-test-result.dto';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post()
  async create(@Body() dto: CreateTestResultDto) {
    return this.testsService.createTestResult(dto);
  }
}
