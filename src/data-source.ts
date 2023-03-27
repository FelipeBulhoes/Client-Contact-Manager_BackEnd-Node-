
import 'dotenv/config';
import path from 'path';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Client } from './entities/clientEntity';
import { Contact } from './entities/contactEntity';

//TEMPORARIO
import { InitialMigration1679351845994 } from './migrations/1679351845994-InitialMigration';
import { InsertPasswordColumn1679354891182 } from './migrations/1679354891182-InsertPasswordColumn';
import { OnDeleteCascade1679494700027 } from './migrations/1679494700027-OnDeleteCascade';

const dataSourceConfig = (): DataSourceOptions => {
  
  const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
  const migrationPath: string = path.join(__dirname, './src/migrations/**.{ts,js}');

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  const nodeEnv: string | undefined = process.env.NODE_ENV;
  
  if (nodeEnv === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: 'postgres',
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [Client, Contact],
    migrations: [InitialMigration1679351845994, InsertPasswordColumn1679354891182, OnDeleteCascade1679494700027]
  };
  
};

export const AppDataSource = new DataSource(dataSourceConfig());
