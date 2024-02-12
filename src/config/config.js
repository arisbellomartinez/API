// Import dotenv module for environment variables configuration
import { config } from "dotenv";

// Load environment variables from .env file into process.env
config();

// Define constants for environment variables with default values
export const PORT = process.env.PORT || 8080;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASS = process.env.DB_PASS || "12345";
export const DB_DATABASE = process.env.DB_DATABASE || "ejemplodb";
export const DB_PORT = process.env.DB_PORT || "3306";
export const SECRET_KEY = process.env.SECRET_KEY;
export const T_USUARIOS = process.env.T_USUARIOS;
export const T_AUTH = process.env.T_AUTH;

// Environment variables provide configuration options for the application.
// The dotenv module loads these variables from a .env file into the process.env object.
// Default values are provided for environment variables that may not be set.
// These constants can be used throughout the application to access configuration values.

