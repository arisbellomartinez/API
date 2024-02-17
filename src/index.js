import app from "./app.js";
import { PORT } from "./config/config.js";
import { logger } from "./config/logger.js";

// Start the server on the specified port
app.listen(PORT, () => {
    // Log info and print server status
    logger.info(`Server is running on port ${PORT}`);
    console.log(`Server is running on port ${PORT}`);
});