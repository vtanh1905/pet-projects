import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as config from './config';
import { ApisModule } from './apis/apis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from './database/entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [...Object.values(config)],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...config.databaseConfig().database,
        entities: [...Object.values(entities)],
      }),
    }),
    ApisModule,
  ],
})
export class AppModule {}
