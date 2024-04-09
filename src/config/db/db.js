// Import necessary modules

import knex from "knex";
import knexConfig from "./knexfile.mjs";

// Define Knex configuration object


// Create a Knex instance with the configured options
const knexInstance = knex(knexConfig);

// Export the Knex instance for use in other parts of the application
export default knexInstance;




