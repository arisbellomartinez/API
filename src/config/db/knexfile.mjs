import { DB_DATABASE, DB_HOST, DB_PASS, DB_USER } from "../config.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path'; // Importa dirname y join de path

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default{
  development: {
    client: 'mysql2',
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_DATABASE
    },
    pool:{
      min: 2,
      max: 10
    },
    migrations: {
      directory: '../db/migrations'
    }
  },
};

