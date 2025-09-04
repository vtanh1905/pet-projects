import { DataSource } from 'typeorm';
import { databaseConfig } from '../config';
import * as entities from './entities';

export const AppDataSource = new DataSource({
  ...databaseConfig().database,
  entities: [...Object.values(entities)],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
