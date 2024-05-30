import User from "../model/user.model.js"; // Import the User model
import bcryptjs from "bcryptjs"; // Import the bcryptjs library for hashing and comparing passwords

// Define an asynchronous function to handle user signup
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body; // Extract fullname, email, and password from the request body
    const user = await User.findOne({ email }); // Check if a user with the given email already exists

    if (user) {
      return res.status(400).json({ message: "User already exists" }); // If user exists, return a 400 (Bad Request) status with an error message
    }

    const hashPassword = await bcryptjs.hash(password, 10); // Hash the password with a salt rounds value of 10
    const createdUser = new User({
      fullname: fullname, // Assign fullname to the new user
      email: email, // Assign email to the new user
      password: hashPassword, // Assign the hashed password to the new user
    });

    await createdUser.save(); // Save the new user to the database

    res.status(201).json({
      message: "User created successfully", // Send a success message
      user: {
        _id: createdUser._id, // Include the user's ID
        fullname: createdUser.fullname, // Include the user's fullname
        email: createdUser.email, // Include the user's email
      },
    });
  } catch (error) {
    console.log("Error: " + error.message); // Log any errors to the console
    res.status(500).json({ message: "Internal server error" }); // Send a 500 (Internal Server Error) status with an error message
  }
};

// Define an asynchronous function to handle user login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body; // Extract email and password from the request body
    const user = await User.findOne({ email }); // Find the user with the given email

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" }); // If user is not found, return a 400 (Bad Request) status with an error message
    }

    const isMatch = await bcryptjs.compare(password, user.password); // Compare the given password with the hashed password in the database

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" }); // If passwords do not match, return a 400 (Bad Request) status with an error message
    }

    res.status(200).json({
      message: "Login successful", // Send a success message
      user: {
        _id: user._id, // Include the user's ID
        fullname: user.fullname, // Include the user's fullname
        email: user.email, // Include the user's email
      },
    });
  } catch (error) {
    console.log("Error: " + error.message); // Log any errors to the console
    res.status(500).json({ message: "Internal server error" }); // Send a 500 (Internal Server Error) status with an error message
  }
};
