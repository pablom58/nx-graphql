import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import { entities } from './entities';
import { config } from '../config/config'

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => ({
        type: 'postgres',
        entities,
        synchronize: true,
        ...configService.database
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
