import express from "express"; // Import the express module
import { getBook } from "../controller/book.controller.js"; // Import the getBook function from the book controller

const router = express.Router(); // Create a new router instance

// Define a route for GET requests to the root path ("/") that uses the getBook function as the handler
router.get("/", getBook);

export default router; // Export the router to be used in other parts of the application
