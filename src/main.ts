/* eslint-disable prettier/prettier */
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.enableCors({credentials:true})
  await app.listen(3002);
}
bootstrap();
