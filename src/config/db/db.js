// Import necessary modules
import { DB_DATABASE, DB_HOST, DB_PASS, DB_USER } from "../config.js";
import knex from "knex";

// Define Knex configuration object
const knexConfig = {
    client: "mysql2",
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_DATABASE
    },
    pool: { min: 0, max: 10 } // Define connection pool settings
};

// Create a Knex instance with the configured options
const knexInstance = knex(knexConfig);

// Export the Knex instance for use in other parts of the application
export default knexInstance;




