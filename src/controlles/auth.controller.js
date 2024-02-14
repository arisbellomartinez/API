// Import necessary modules
import knexInstance from "../config/db/db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { SECRET_KEY, T_AUTH } from "../config/config.js";
import { logger } from "../config/logger.js";

// Function to fetch all users from the database
const allSing = async () => {
    const aux = await knexInstance(T_AUTH).select("*");
    return aux;
};

// Sign up route handler
export const signUp = async (req, res) => {
    try {
        let match = 0;
        const obj = req.body;
        const aux = await allSing();
        
        // Check if the provided username already exists
        aux.forEach((user) => {
            if (user.usuario == obj.usuario) {
                match++;
            }
        });
        
        if (match == 0) {
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

            logger.log("info", "User created successfully");
        } else {
            // User already exists
            match = 0;
            logger.log("warn", "User already exists");
            return res.status(400).send("Invalid data provided. User already exists.");
        }
    } catch (error) {
        logger.log("error",error)
        return res.status(500).json({ message: "Error creating user" });
    }
};

// Sign in route handler
export const signIn = async (req, res) => {
    let matchUser = 0;
    const obj = req.body;
    const aux = await allSing();

    // Check if the provided username and password match with the database
    aux.forEach((element) => {
        if (element.usuario == obj.usuario) {
            const condition = bcryptjs.compareSync(obj.password, element.password);
            if (condition) {
                matchUser = 2;
                // Generate JWT token
                const token = jwt.sign({ id: element.id }, SECRET_KEY, { expiresIn: 86400 });
                // Respond with the token
                res.json({ token });
                logger.log("info", "User signed in successfully, token provided");
            } else {
                matchUser = 1;
            }
        }
    });

    // Respond with appropriate error messages
    if (matchUser == 0) {
        logger.log("info","User not registered")
        return res.status(400).json({ message: "User not registered" });
    } else if (matchUser == 1) {
        logger.log("info","Incorrect password")
        return res.status(400).json({ message: "Incorrect password" });
    }
};
