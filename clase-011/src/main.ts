import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
const FileStore = require('session-file-store')(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      store: new FileStore({}) as any,
      secret: 'mi_secreto_super_seguro',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60 * 60 * 1000 }, // 1 hora
    }),
  );
  await app.listen(3000);
}
bootstrap();
