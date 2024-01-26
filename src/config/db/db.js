import { createPool } from "mysql2/promise";
import { DB_DATABASE,DB_HOST,DB_PASS,DB_USER } from "../config.js";

export const db = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE
});

