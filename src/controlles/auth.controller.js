// Import necessary modules
import knexInstance from "../config/db/db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { SECRET_KEY, T_AUTH } from "../config/config.js";
import { logger } from "../config/logger.js";


// Function to fetch all users from the database
const allSing = async (i) => {
    const aux = await knexInstance(T_AUTH).select("*").where("usuario","=",i);
    return aux;
};

// Sign up route handler
export const signUp = async (req, res) => {
    try {
        const obj = req.body;
        const [aux] = await allSing(obj.usuario);
        
        // Check if the provided username already exists
        
        if (aux) {
            // User already exists
            logger.log("warn", "User already exists");
            return res.status(400).send("Invalid data provided. User already exists.");
        }
        
            // Hash the password
            const crypt = bcryptjs.hashSync(obj.password);

            // Create a new user object
            const newUser = {
                usuario: obj.usuario,
                password: crypt
            };

            // Insert user into the database
            
            const [insertedUser] = await knexInstance(T_AUTH).insert(newUser);

            // Generate JWT token
            const token = jwt.sign({ id: insertedUser }, SECRET_KEY, { expiresIn: 86400 });

            // Respond with the token
            res.status(200).json({ token });

            // Log success message
            logger.log("info", "User created successfully");
        
    } catch (error) {
        // Log error and respond with 500 Internal Server Error
        logger.log("error", error);
        return res.status(500).json({ message: "Error creating user" });
    }
};

// Sign in route handler
export const signIn = async (req, res) => {

    const obj = req.body;
    const [aux] = await allSing(obj.usuario);


    if (!aux) {
        logger.log("info", "User not registered");
        return res.status(400).json({ message: "User not registered" });
    }

    const condition = bcryptjs.compareSync(obj.password, aux.password);

    if (!condition) {
        logger.log("info", "Incorrect password");
        return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: aux.id }, SECRET_KEY, { expiresIn: 86400 });
    // Respond with the token
    logger.log("info", "User signed in successfully, token provided");
    res.json({ token });
};