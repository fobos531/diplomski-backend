import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/exception-filters/GlobalExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(3000);
}
bootstrap();
