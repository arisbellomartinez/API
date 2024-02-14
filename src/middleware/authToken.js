// Import necessary modules
import jwt from "jsonwebtoken";
import { SECRET_KEY, T_AUTH } from "../config/config.js";
import knexInstance from "../config/db/db.js";
import { logger } from "../config/logger.js";

// Middleware function to verify JWT token
export const verifyToken = async (req, res, next) => {
    try {
        // Retrieve token from request headers
        const token = req.headers["x-access-token"];

        // Check if token exists
        if (!token) {
            logger.log("warn", "Token does not exist")
            return res.status(403).json({ message: "No access token provided" });
        }

        // Verify the token
        const decoded = jwt.verify(token, SECRET_KEY);

        // Check if the user exists in the database
        const user = await knexInstance(T_AUTH).select("*").where("id", "=", decoded.id);

        // If user does not exist, return 404 Not Found
        if (user.length === 0) {
            logger.log("warn","User does not exist")
            return res.status(404).json({ message: "User does not exist" });
        }
        logger.log("info","User verified")

        // If user exists, proceed to the next middleware
        next();
    } catch (error) {
        logger.error("error",error)
        // If token verification fails, return 401 Unauthorized
        return res.status(401).json({ message: "Unauthorized" });
    }
};
