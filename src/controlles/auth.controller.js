// Import necessary modules
import { db } from "../config/db/db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config.js";

// Function to fetch all users from the database
const allSing = async () => {
    const [rows] = await db.query('SELECT * FROM ejemplodb.auth');
    return rows;
};

// Sign up route handler
export const signUp = async (req, res) => {
    try {
        let match = 0;
        const { usuario, password } = req.body;
        const aux = await allSing();
        
        // Check if the provided username already exists
        aux.forEach((user) => {
            if (user.usuario == usuario) {
                match++;
            }
        });

        if (match == 0) {
            // Hash the password
            const crypt = bcryptjs.hashSync(password);
            // Insert user into the database
            const [rows] = await db.query("INSERT INTO auth (usuario, password) VALUES (?, ?)", [usuario, crypt]);
            // Generate JWT token
            const token = jwt.sign({ id: rows.insertId }, SECRET_KEY, { expiresIn: 86400 });
            // Respond with the token
            res.status(200).json({ token });
        } else {
            // User already exists
            match = 0;
            return res.status(400).send("Invalid data provided. User already exists.");
        }
    } catch (error) {
        return res.status(500).json({ message: "Error creating user" });
    }
};

// Sign in route handler
export const signIn = async (req, res) => {
    let matchUser = 0;
    const { usuario, password } = req.body;
    const aux = await allSing();

    // Check if the provided username and password match with the database
    aux.forEach((element) => {
        if (element.usuario == usuario) {
            const condition = bcryptjs.compareSync(password, element.password);
            if (condition) {
                matchUser = 2;
                const token = jwt.sign({ id: element.id }, SECRET_KEY, { expiresIn: 86400 });
                // Respond with the token
                res.json({ token });
            } else {
                matchUser = 1;
            }
        }
    });

    // Respond with appropriate error messages
    if (matchUser == 0) {
        return res.status(400).json({ message: "User not registered" });
    } else if (matchUser == 1) {
        return res.status(400).json({ message: "Incorrect password" });
    }
};
