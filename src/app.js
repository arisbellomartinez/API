// Import necessary modules
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { PORT } from "./config/config.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { logger } from "./config/logger.js";

// Create an Express application instance
const app = express();

// Middleware for logging HTTP requests
app.use(morgan("dev"));

// Parse incoming JSON requests
app.use(express.json());

// Parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON data from the request body
app.use(bodyParser.json());

// Routes

// Use index routes for "/tasks" path
app.use("/tasks", indexRoutes);

// Use usuarios routes for "/tasks" path
app.use("/tasks", usuariosRoutes);

// Use auth routes for other paths
app.use(authRoutes);

// Error handling for 404 Not Found
app.use((req, res, next) => {
    logger.log("error", "404 Not Found"+ req.status)
    res.status(404).json({ error: "Not Found" });
});

// Start the server on the specified port
app.listen(PORT, () => {
    logger.log("info", `Server is running on port ${PORT}`);
    console.log(`Server is running on port ${PORT}`);
});

