// Import necessary modules
import { T_USUARIOS } from "../config/config.js";
import knexInstance from "../config/db/db.js";
import { logger } from "../config/logger.js";

// Get all users
export const getUsuarios = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await knexInstance(T_USUARIOS).select("*");

        // Respond with the retrieved users as JSON
        res.status(200).json(users);

        // Log info
        logger.info("info", "getUsuarios");
    } catch (error) {
        // Log error and respond with a 500 Internal Server Error
        logger.error("error", error);
        return res.status(500).json({ message: "Error fetching users" });
    }
};

// Get user by ID
export const getUsuariosById = async (req, res) => {
    try {
        // Extract user ID from request parameters
        const id = req.params.id;

        // Fetch user by ID from the database
        const user = await knexInstance(T_USUARIOS).select("*").where("id", "=", id);

        // Check if user exists; if not, respond with a 404 Not Found
        if (user.length === 0) {
            logger.warn("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with the retrieved user as JSON
        res.json(user);
        
        // Log info
        logger.info("info", "getUsario id");
    } catch (error) {
        // Log error and respond with a 500 Internal Server Error
        logger.error("error", error);
        return res.status(500).json({ message: "Error fetching user by ID" });
    }
};

// Create a new user
export const createUsuarios = async (req, res) => {
    try {
        // Extract data from the request body
        const obj = req.body;

        // Check if required data is provided
        if (obj.title != null && obj.description != null && obj.status != null) {
            // Insert new user into the database
            const [newUserId] = await knexInstance(T_USUARIOS).insert(obj);

            // Respond with the created user details as JSON
            res.json({
                id: newUserId,
                title: obj.title,
                description: obj.description,
                status: obj.status
            });

            // Log info
            logger.info("info", "createUsuarios successful");
        } else {
            // Respond with an error message if data is missing
            logger.warn("createUsuarios failed invalid data");
            return res.status(400).send("Invalid data provided");
        }
    } catch (error) {
        // Log error and respond with a 500 Internal Server Error
        logger.error("error", error);
        return res.status(500).json({ message: "Error creating user" });
    }
};

// Update user by ID
export const updateUsuarios = async (req, res) => {
    try {
        // Extract user ID from request parameters
        const { id } = req.params;

        // Extract data from the request body
        const obj = req.body;

        // Check if required data is provided
        if (obj.title != null && obj.description != null && obj.status != null) {
            // Update user in the database
            const updatedCount = await knexInstance(T_USUARIOS).where("id", "=", id).update(obj);

            // Check if the user was found and updated
            if (updatedCount === 0) {
                logger.warn("User not found");
                return res.status(404).json("User not found");
            }

            // Respond with a success message
            res.send("User updated");
            
            // Log info
            logger.info("info", "User update successful");
        } else {
            // Respond with an error message if data is missing
            logger.warn("updateUsuarios failed invalid data");
            return res.status(400).send("Invalid data provided");
        }
    } catch (error) {
        // Log error and respond with a 500 Internal Server Error
        logger.error("error", error);
        return res.status(500).json({ message: "Error updating user" });
    }
};

// Delete user by ID
export const deleteUsuarios = async (req, res) => {
    try {
        // Delete user from the database by ID
        const deletedCount = await knexInstance(T_USUARIOS).delete().where("id", "=", req.params.id);

        // Check if the user was found and deleted
        if (deletedCount <= 0) {
            logger.warn("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with a 200
        res.sendStatus(200);
        
        // Log info
        logger.info("info", "User delete successful");
    } catch (error) {
        // Log error and respond with a 500 Internal Server Error
        logger.error("error", error);
        return res.status(500).json({ message: "Error deleting user" });
    }
};