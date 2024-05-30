import mongoose from "mongoose"; // Import the mongoose module

// Define a schema for the "User" collection
const userSchema = mongoose.Schema({
    fullname: {
        type: String,      // The full name of the user
        required: true,    // This field is required
    },
    email: {
        type: String,      // The email of the user
        required: true,    // This field is required
        unique: true,      // The email must be unique in the database
    },
    password: {
        type: String,      // The password of the user
        required: true,    // This field is required
    },
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

// Export the model to be used in other parts of the application
export default User;
