import express from "express"; // Import the express module
import { signup} from "../controller/user.controller.js"; // Import the signup and login functions from the user controller

const router = express.Router(); // Create a new router instance

// Define a route for POST requests to "/signup" that uses the signup function as the handler
router.post("/signup", signup);

export default router; // Export the router to be used in other parts of the application
