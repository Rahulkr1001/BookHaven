import mongoose from "mongoose";

// Define a schema for the "Book" collection
const bookSchema = mongoose.Schema({
    name: String,      // Name of the book
    price: Number,     // Price of the book
    category: String,  // Category or genre of the book
    image: String,     // URL or path to the image of the book
    title: String,     // Title of the book
});

// Create a model based on the schema
const Book = mongoose.model("Book", bookSchema);

// Export the model to be used in other parts of the application
export default Book;
