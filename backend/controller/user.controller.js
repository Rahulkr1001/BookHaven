import User from "../model/user.model.js"; // Import the User model
import bcryptjs from "bcryptjs";

// Define an asynchronous function to handle user signup
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body; // Extract fullname, email, and password from the request body
    const user = await User.findOne({ email }); // Check if a user with the given email already exists

    if (user) {
      return res.status(400).json({ message: "User already exists" }); // If user exists, return a 400 (Bad Request) status with an error message
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
        fullname: fullname,
        email: email,
        password: hashPassword,
    });

    await createdUser.save(); // Save the new user to the database

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log("Error: " + error.message); // Log any errors to the console
    res.status(500).json({ message: "Internal server error" }); // Send a 500 (Internal Server Error) status with an error message
  }
};
