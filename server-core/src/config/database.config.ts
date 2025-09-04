import { DataSourceOptions } from 'typeorm';

interface DatabaseConfig {
  database: DataSourceOptions;
}

export default (): DatabaseConfig => ({
  database: {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'server_core_db',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    logging: process.env.DB_LOGGING === 'true',
  },
});
