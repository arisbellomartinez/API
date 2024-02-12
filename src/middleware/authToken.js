// Import necessary modules
import jwt from "jsonwebtoken";
import { SECRET_KEY, T_AUTH } from "../config/config.js";
import knexInstance from "../config/db/db.js";

// Middleware function to verify JWT token
export const verifyToken = async (req, res, next) => {
    try {
        // Retrieve token from request headers
        const token = req.headers["x-access-token"];

        // Check if token exists
        if (!token) {
            return res.status(403).json({ message: "No access token provided" });
        }

        // Verify the token
        const decoded = jwt.verify(token, SECRET_KEY);

        // Check if the user exists in the database

        const aux = await knexInstance(T_AUTH).select("*").where("id","=", decoded.id)

        // If user does not exist, return 404 Not Found
        if (aux === 0) {
            return res.status(404).json({ message: "User does not exist" });
        }

        // If user exists, proceed to the next middleware
        next();
    } catch (error) {
        // If token verification fails, return 401 Unauthorized
        return res.status(401).json({ message: "Unauthorized" });
    }
};
