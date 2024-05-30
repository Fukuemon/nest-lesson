import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config(); // .env ファイルから環境変数をロード
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_PORT = process.env.DATABASE_PORT;
const DATABASE_DB = process.env.DATABASE_DB;
if (
  !DATABASE_HOST ||
  !DATABASE_USER ||
  !DATABASE_PASSWORD ||
  !DATABASE_PORT ||
  !DATABASE_DB
) {
  throw new Error('Enviroment Database Error');
}

const source = new DataSource({
  type: 'postgres',
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_DB,
  entities: ['dist/entities/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: false,
});
export default source;
