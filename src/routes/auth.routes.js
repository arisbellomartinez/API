// Import necessary modules
import { Router } from "express";
import { signIn,signUp } from "../controlles/auth.controller.js";

// Create an Express router instance
const router = Router();

// Route to handle user sign in
router.post("/signin", signIn);

// Route to handle user sign up
router.post("/signup", signUp);

// Export the router for use in other parts of the application
export default router;
