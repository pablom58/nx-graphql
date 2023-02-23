import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { config } from './config';
import { validationSchema } from './validation-schema';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      validationSchema,
    }),
  ],
})
export class ConfigModule {}
