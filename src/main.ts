/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  app.enableCors({
    origin: 'http://localhost:5173', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: [
      'Content-Type', 
      'Authorization', 
      'Access-Control-Allow-Headers', 
      'Access-Control-Allow-Origin'
    ],
    credentials: true, // If you're using cookies or authentication
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
