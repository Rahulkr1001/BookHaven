import Book from "../model/book.model.js"; // Import the Book model from the specified file

// Define an asynchronous function to handle GET requests for retrieving books
export const getBook = async(req, res) => {
    try {
        // Attempt to find all books in the database
        const book = await Book.find();
        // If successful, send the books as a JSON response with a 200 (OK) status
        res.status(200).json(book);
    } catch (error) {
        // If an error occurs, log the error to the console
        console.log("Error: ", error);
        // Send a JSON response with a 500 (Internal Server Error) status and the error message
        res.status(500).json(error);
    }
};
