// Import necessary modules
import { Router } from "express";
import { test } from "../controlles/index-controller.js";

// Create an Express router instance
const router = Router();

// Define route for testing
router.get('/test', test);

// Export the router for use in other parts of the application
export default router;
