// Import necessary modules

import { DB_DATABASE, DB_HOST, DB_PASS, DB_USER } from "../config.js";
import knex from "knex";

// Create a MySQL connection pool


const knexConfig=({
    client: "mysql2",
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_DATABASE
    },
    pool: {min:0, max:10}
})

const knexInstance=knex(knexConfig);

export default knexInstance;





// The database connection pool is exported for reuse in other parts of the application.
// It is configured with the details provided in the config.js file.

// DB_HOST: The hostname of the database server
// DB_USER: The database user
// DB_PASS: The database user's password
// DB_DATABASE: The name of the database to be used

// This setup allows for centralized configuration and easy maintenance.
// The use of a connection pool is a best practice for handling database connections in a Node.js application.

