import { config } from "dotenv";

config();

export const PORT= process.env.PORT || 8080
export const DB_HOST= process.env.DB_HOST || "localhost"
export const DB_USER= process.env.DB_USER || "root"
export const DB_PASS= process.env.DB_PASS || "12345"
export const DB_DATABASE= process.env.DB_DATABASE || "ejemplodb"
export const DB_PORT= process.env.DB_PORT || "3306"
export const SECRET_KEY= process.env.SECRET_KEY