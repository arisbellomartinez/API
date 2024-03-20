// Update with your config settings.

import { DB_DATABASE, DB_HOST, DB_PASS, DB_USER } from "../config.js";

const knexConfig = {

  development: {
    client: 'mysql2',
    connection: {
      host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_DATABASE
    },
    pool:{
      min:2,
      max:10
    },
    migrations:{
      directory: path.join(__dirname, "./src/config/db/models/"),
    }
  },

};

export default knexConfig;
