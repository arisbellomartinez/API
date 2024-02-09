// Import necessary modules
import { Router } from "express";
import {
    getUsuarios,
    createUsuarios,
    updateUsuarios,
    deleteUsuarios,
    getUsuariosById
} from "../controlles/usuarios.controller.js";
import { verifyToken } from "../middleware/authToken.js";

// Create an Express router instance
const router = Router();

// Route to get all users
router.get('/',verifyToken, getUsuarios);

// Route to get user by ID
router.get('/:id',verifyToken, getUsuariosById);

// Route to create a new user
router.post('/',verifyToken, createUsuarios);

// Route to update user by ID using PUT
router.put('/:id',verifyToken, updateUsuarios);

// Route to delete user by ID
router.delete('/:id',verifyToken, deleteUsuarios);

// Export the router for use in other parts of the application
export default router;
