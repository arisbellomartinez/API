// Import necessary modules
import { T_USUARIOS } from "../config/config.js";
import knexInstance from "../config/db/db.js";

// Get all users
export const getUsuarios = async (req, res) => {
    try {
        // Fetch all users from the database

        const aux = await knexInstance(T_USUARIOS).select("*")
        
        // Respond with the retrieved users as JSON
        res.json(aux);
    } catch (error) {
        // Handle errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: "Error fetching users" });
    }
};

// Get user by ID
export const getUsuariosById = async (req, res) => {
    try {
        // Extract user ID from request parameters
        const id = req.params.id;

        // Fetch user by ID from the database
        const aux= await knexInstance(T_USUARIOS).select("*").where("id","=", id)

        // Check if user exists; if not, respond with a 404 Not Found
        if (aux.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with the retrieved user as JSON
        res.json(aux);
    } catch (error) {
        // Handle errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: "Error fetching user by ID" });
    }
};

// Create a new user
export const createUsuarios = async (req, res) => {
    try {
        // // Extract data from the request body
        const obj = req.body
       

        // Check if required data is provided
        if (obj.title != null && obj.description != null && obj.status != null) {
            // // Insert new user into the database
            

            const [aux] =  await knexInstance(T_USUARIOS).insert(obj)

            console.log(obj);

            // Respond with the created user details as JSON
            res.json({
                id: aux,
                title:obj.title,
                description:obj.description,
                status:obj.status
            });
        } else {
            // Respond with an error message if data is missing
            return res.status(400).send("Invalid data provided");
        }
    } catch (error) {
        // Handle errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: "Error creating user 1" });
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
            // // Update user in the database
            // // const [result] = await db.query('UPDATE usuarios SET title = ?, description = ?, status = ? WHERE id = ?', [title, description, status, id]);

            const aux =await knexInstance(T_USUARIOS).where("id","=",id).update(obj)
            // console.log(aux);
            
            console.log(aux);

            // Check if the user was found and updated
            if (aux === 0) {
                return res.status(404).json("User not found");
            }

            // Respond with a success message
            res.send("User updated");
        } else {
            // Respond with an error message if data is missing
            return res.status(400).send("Invalid data provided");
        }
    } catch (error) {
        // Handle errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: "Error updating user" });
    }
};

// Delete user by ID
export const deleteUsuarios = async (req, res) => {
    try {
        // Delete user from the database by ID
        // const [result] = await db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id]);

        const aux = await knexInstance(T_USUARIOS).delete().where("id","=",req.params.id)

        // Check if the user was found and deleted
        if (aux <= 0) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with a 204 No Content status
        res.sendStatus(204);
    } catch (error) {
        // Handle errors and respond with a 500 Internal Server Error
        return res.status(500).json({ message: "Error deleting user" });
    }
};
