import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
// import contactRoute from "./route/contact.route.js"

dotenv.config();


//app has all functionality of express
const app = express();

app.use(
    cors({
      origin: "https://book-store-kbvyvfsj4-himanshu-tiwaris-projects-af1b11c5.vercel.app",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
// app.use(cors());
app.use(express.json()); // aceept data in json

const PORT = process.env.PORT || 4000;
const URI = process.env.Mongo_URI;

console.log("Mongo_URI:", process.env.Mongo_URI);  // Debugging line

if (!URI) {
    console.error("MongoDB URI is not defined in the .env file.");
    process.exit(1);
}




mongoose.connect(URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB: ", error.message);
    process.exit(1); // Exit the process if there's an error connecting to MongoDB
});

// const connectToMongoDB = async () => {
//     try {
//         await mongoose.connect(URI);
//         console.log("Connected to MongoDB");
//         return Promise.resolve("Connection Successful"); // Return a resolved promise if successful
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error.message);
//         return Promise.reject(error); // Return a rejected promise if an error occurs
//     }
// };

// // Usage
// connectToMongoDB()
//     .then((message) => {
//         console.log(message); // This will log "Connection Successful"
//     })
//     .catch((error) => {
//         console.error("Connection failed:", error.message); // Handle connection error
//     });





// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
// app.use("/contact", contactRoute);



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
