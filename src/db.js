import { createPool } from "mysql2/promise";

export const db = createPool({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ejemplodb"
});

