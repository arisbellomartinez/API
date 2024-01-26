// Import necessary modules
import { Router } from "express";
import {
    getUsuarios,
    createUsuarios,
    updateUsuarios,
    deleteUsuarios,
    getUsuariosById
} from "../controlles/usuarios.controller.js";

// Create an Express router instance
const router = Router();

// Route to get all users
router.get('/', getUsuarios);

// Route to get user by ID
router.get('/:id', getUsuariosById);

// Route to create a new user
router.post('/', createUsuarios);

// Route to update user by ID using PUT
router.put('/:id', updateUsuarios);

// Route to delete user by ID
router.delete('/:id', deleteUsuarios);

// Export the router for use in other parts of the application
export default router;
